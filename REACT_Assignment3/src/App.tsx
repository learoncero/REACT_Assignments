import { useState } from "react";
import Header from "./Header";
import AddMessageView from "./AddMessageView";
import MessagesView from "./MessagesView";
import * as Tabs from "@radix-ui/react-tabs";
import Navigation from "./Navigation";
import { IntlProvider } from "use-intl";

export type Message = {
  id: number;
  subject: string;
  body: string;
  read: boolean;
};

const messagesByLocale = {
  en: {
    Header: {
      heading: "Message Board",
    },
    NavigationTab: {
      addMessage: "ADD MESSAGE",
      messages: "MESSAGES",
    },
    FormInputField: {
      subject: "Subject",
      body: "Body",
    },
    FormSubmitButton: {
      submit: "Submit",
    },
    MessagesSummary: {
      summary:
        "{unreadMessagesCount, plural, =0 {You have no unread messages.} =1 {You have one unread message.} other {You have {unreadMessagesCount} unread messages.}}",
    },
    LocalePicker: {
      dropdownTrigger: "EN",
    },
  },
  de: {
    Header: {
      heading: "Nachrichtenboard",
    },
    NavigationTab: {
      addMessage: "NACHRICHT HINZUFÜGEN",
      messages: "NACHRICHTEN",
    },
    FormInputField: {
      subject: "Betreff",
      body: "Text",
    },
    FormSubmitButton: {
      submit: "Absenden",
    },
    MessagesSummary: {
      summary:
        "{unreadMessagesCount, plural, =0 {Sie haben keine ungelesenen Nachrichten.} =1 {Sie haben eine ungelesene Nachricht.} other {Sie haben {unreadMessagesCount} ungelesene Nachrichten.}}",
    },
    LocalePicker: {
      dropdownTrigger: "DE",
    },
  },
};

let messageID = 0;

export default function App() {
  const [messages, setMessages] = useState<Array<Message>>([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [locale, setLocale] = useState<"en" | "de">("en");

  function onSubmit(subject: string, body: string) {
    const id = messageID++;

    const newMessages = messages.concat({
      id: id,
      subject: subject,
      body: body,
      read: false,
    });

    setMessages(newMessages);
  }

  function onMessageRead(id: number) {
    messages.map((message) => {
      if (message.id === id) {
        const newMessage = {
          id: message.id,
          subject: message.subject,
          body: message.body,
          read: true,
        };

        const messagesBefore = messages.slice(0, id);
        const messagesAfter = messages.slice(id + 1);
        const newMessages = messagesBefore.concat(newMessage, messagesAfter);
        setMessages(newMessages);
      }
    });
  }

  function onTabChange(tabIndex: number) {
    setTabIndex(tabIndex);
  }

  function onLocaleChange(locale: "en" | "de") {
    setLocale(locale);
  }

  return (
    <IntlProvider
      locale={locale}
      messages={messagesByLocale[locale]}
      timeZone="Europe/Vienna"
    >
      <Header />
      <Tabs.Root defaultValue="AddMessageTab">
        <Navigation
          messages={messages}
          tabIndex={tabIndex}
          onTabChange={onTabChange}
          onLocaleChange={onLocaleChange}
        />
        <Tabs.Content value="AddMessageTab">
          <AddMessageView onSubmit={onSubmit} />
        </Tabs.Content>
        <Tabs.Content value="MessagesTab">
          <MessagesView messages={messages} onMessageRead={onMessageRead} />
        </Tabs.Content>
      </Tabs.Root>
    </IntlProvider>
  );
}
