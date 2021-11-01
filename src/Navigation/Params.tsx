import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type LoginParamList = {
  SignUp: undefined;
  Login: undefined;
  SignIn: undefined;
};

export type ContractorParamList = {
  ContractorAccount: undefined;
  Bid: undefined;
};

// export type ContractorNavProps<T extends keyof ContractorParamList> = {
//   navigation: NativeStackNavigationProp<ContractorParamList, T>;
// };

export type AccountParamList = {
  AccountScreen: undefined;
  AccountDetails: undefined;
};

export type LoginNavProps<T extends keyof LoginParamList> = {
  navigation: NativeStackNavigationProp<LoginParamList, T>;
};

export type AccountNavProps<T extends keyof AccountParamList> = {
  navigation: NativeStackNavigationProp<AccountParamList, T>;
};

export type BottomNavParamList = {
  Home: undefined;
  Orders: undefined;
  Account: undefined;
};
