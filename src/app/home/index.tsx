import { View, Alert, SectionList, Text } from "react-native";
import React, { useEffect, useState, useId, useRef } from "react";
import { styles } from "./styles";
import { Input } from "../components/input";
import { Feather } from "@expo/vector-icons";
import { theme } from "@/theme";
import { TouchableOpacity } from "react-native";
import { Contact, ContactProps } from "../components/contact";
import * as Contacts from "expo-contacts";
import BottomSheet from "@gorhom/bottom-sheet";
import { Avatar } from "../components/avatar";
import { Button } from "../components/button";
type SectionListDataProps = {
  title: string;
  data: ContactProps[];
};

export function Home() {
  const [contacts, setContacts] = useState<SectionListDataProps[]>([]);
  const [name, setName] = useState<string>("");
  const [contact, setContact] = useState<Contacts.Contact>();

  const bottomSheet = useRef<BottomSheet>(null);

  const handleBottomSheetOpen = () => bottomSheet.current?.expand();
  const handleBottomSheetClose = () => bottomSheet.current?.snapToIndex(0);

  async function handleOpenDetails(id: string) {
    const response = await Contacts.getContactByIdAsync(id);
    setContact(response);
    handleBottomSheetOpen();
  }

  async function fetchContacts() {
    try {
      const { status } = await Contacts.requestPermissionsAsync();

      if (status === Contacts.PermissionStatus.GRANTED) {
        const { data } = await Contacts.getContactsAsync({
          sort: "firstName",
          name,
        });
        const list = data
          .map((contact) => ({
            id: contact.id ?? useId(),
            name: contact.name,
            image: contact.image,
          }))
          .reduce<SectionListDataProps[]>((acc: any, item) => {
            const firstLetter = item.name[0].toUpperCase();
            const existinggEntry = acc.find(
              (entry: SectionListDataProps) => entry.title === firstLetter
            );

            if (existinggEntry) {
              existinggEntry.data.push(item);
            } else {
              acc.push({ title: firstLetter, data: [item] });
            }
            return acc;
          }, [])
          .sort((a, b) => a.title.localeCompare(b.title));

        setContacts(list);
        setContact(data[0])
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Contatos", "Não foi possível carregar os contatos");
    }
  }

  useEffect(() => {
    fetchContacts();
  }, [name]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Input style={styles.input}>
          <Feather name="search" size={16} color={theme.colors.gray_300} />
          <Input.Field
            placeholder="Pesquisar pelo nome..."
            onChangeText={setName}
            value={name}
          />
          <TouchableOpacity onPress={() => setName("")}>
            <Feather name="x" size={16} color={theme.colors.gray_300} />
          </TouchableOpacity>
        </Input>
      </View>
      <SectionList
        sections={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Contact contact={item} onPress={() => handleOpenDetails(item.id)} />
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.titleSection}>{section.title}</Text>
        )}
        contentContainerStyle={styles.contentList}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      {contact && (
        <BottomSheet
          ref={bottomSheet}
          snapPoints={[0.01, 284]}
          handleComponent={() => null}
          backgroundStyle={styles.BottomSheet}
        >
          <Avatar name={contact.name} image={contact.image} variant="large" containerStyles={styles.image} />
          <View style={styles.bottomSheetContent}>
            <Text style={styles.contactName}>{contact.name}</Text>
            { contact.phoneNumbers && 
            <View style={styles.phoneNumber}>
              <Feather name="phone" size={18} color={theme.colors.blue}/>
              <Text style={styles.phone}>
                {contact.phoneNumbers[0].number}
              </Text>
            </View>}
            <Button title="Fechar" onPress={handleBottomSheetClose}/>
          </View>
        </BottomSheet>
      )}
    </View>
  );
}
