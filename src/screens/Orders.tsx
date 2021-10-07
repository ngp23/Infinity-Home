import React from 'react';
import { SafeAreaView, StatusBar, SectionList, View } from 'react-native';
import { Divider } from 'react-native-elements';
import Order from '../components/Order';
import Header from '../components/Header';
import Text from '../customs/CustomText';

const Data = [
  {
    title: 'Current',
    data: [
      {
        Service: 'Roofing',
        ServiceIcon: 'roofing',
        Status: 'In-Transit',
      },
      {
        Service: 'Plumbing',
        ServiceIcon: 'plumbing',
        Status: 'In-Progress',
      },
      {
        Service: 'Electrical',
        ServiceIcon: 'electrical-services',
        Status: 'Completing Work',
      },
    ],
  },
  {
    title: 'Completed',
    data: [
      { Service: 'Lawn', ServiceIcon: 'grass', Status: 'Completed' },
      { Service: 'Painting', ServiceIcon: 'format-paint', Status: 'Completed' },
      { Service: 'Hvac', ServiceIcon: 'hvac', Status: 'Completed' },
      { Service: 'Gutter', ServiceIcon: 'filter-alt', Status: 'Completed' },
      { Service: 'Home Cleaning', ServiceIcon: 'home', Status: 'Completed' },
      { Service: 'Locks Installation', ServiceIcon: 'lock', Status: 'Completed' },
      { Service: 'Window Treatments', ServiceIcon: 'branding-watermark', Status: 'Completed' },
    ],
  },
];

const Orders: React.FC = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      }}>
      <Header name="Orders" size={24} />
      <SectionList
        sections={Data}
        stickySectionHeadersEnabled
        keyExtractor={(item, index) => item.Service + index}
        renderItem={({ item }) => <Order item={item}/>}
        renderSectionHeader={({ section: { title } }) => (
          <Title title={title} />
        )}
      />
    </SafeAreaView>
  );
};

const Title: React.FC<{ title: string }> = (props) => (
  <View style={{ paddingBottom: 10 }}>
    <Text
      style={{
        paddingHorizontal: 32,
        paddingVertical: 10,
        fontSize: 19,
        backgroundColor: '#fff',
      }}>
      {props.title}
    </Text>
    <Divider width={1} />
  </View>
);

export default Orders;
