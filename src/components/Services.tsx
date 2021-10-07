import React from 'react';
import { View } from 'react-native';
import Text from '../customs/CustomText';
import { Icon } from 'react-native-elements';

interface ServicesProps {
  finalFilteredList: {
    Service: string;
    ServiceIcon: string;
    IconColor: string;
  }[][];
}
const Services: React.FC<ServicesProps> = (props) => {
  return (
    <View>
      <Text
        style={{
          paddingHorizontal: 32,
          paddingVertical: 10,
          fontSize: 19,
          marginBottom: 30,
        }}>
        Categories
      </Text>
      {props.finalFilteredList.map((rowServices, index) => (
        <View
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginBottom: 30,
          }}>
          {rowServices.map((singleService, i) => (
            <View
              key={i}
              style={{
                alignItems: 'center',
                paddingVertical: 10,
                justifyContent: 'space-around',
                paddingHorizontal: 10,
                backgroundColor: '#519EE7',
                borderRadius: 15,
                width: 90,
                height: 100,
              }}>
              <ServiceIcon
                ServiceIcon={singleService.ServiceIcon}
                IconColor={singleService.IconColor}
              />
              <Service service={singleService.Service} />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const ServiceIcon: React.FC<{ ServiceIcon: string; IconColor: string }> = (
  props
) => (
  <Icon
    type="material"
    name={props.ServiceIcon}
    color={props.IconColor}
    size={32}
  />
);

const Service: React.FC<{ service: string }> = (props) => (
  <Text
    type="Quin"
    style={{
      fontSize: 12,
      textAlign: 'center',
      fontWeight: '600',
      letterSpacing: 1,
    }}>
    {props.service}
  </Text>
);

export default Services;
