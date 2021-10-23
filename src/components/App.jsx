import ContactsCard from "./ContactsCard";

export default function App() {
  return (
    <div>
      <ContactsCard
        name="Joe Biden"
        pos="46th president of United States"
        img="data:image/jpeg;base64,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"
        email="j.robinette.biden@joebiden.com"
        mob="+1- 202-456-1111"
        addr="The White House,DC 20500"
      />
      <ContactsCard
        name="Ram Nath Kovind"
        pos="16th president of President of India"
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ram_Nath_Kovind_official_portrait.jpg/440px-Ram_Nath_Kovind_official_portrait.jpg"
        email="presidentofindia@rb.nic.in"
        mob="+011-23013287 "
        addr="Rashtrapati Bhavan,New Delhi,110004"
      />

      <ContactsCard
        name="Boris Johnson"
        pos="100th Prime Minister of the United Kingdom"
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Boris_Johnson_official_portrait.jpg/440px-Boris_Johnson_official_portrait.jpg"
        email="boris.johnson.mp@parliament.uk"
        mob="+44- 020 7219 4682"
        addr="House of Commons,
      London,
      SW1A 0AA"
      />
      <ContactsCard
        name="Xi Jinping"
        pos="9th President of the People's Republic of China"
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Xi_Jinping_2019.jpg/330px-Xi_Jinping_2019.jpg"
        email="chinaembpress_us@mfa.gov.cn"
        mob="+86- 10 6307 0900"
        addr="	174 Chang'an Avenue, Xicheng District, Beijing"
      />
    </div>
  );
}
