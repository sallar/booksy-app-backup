import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import {
  useNavigationButtonPress,
  useNavigationComponentDidAppear,
} from 'react-native-navigation-hooks';
import { ListItem, Icon, Layout } from 'react-native-ui-kitten';
import { globalStyles } from '../../styles/global';
import { listShelfs } from '../../graphql/queries';
import { ListShelfsQuery } from '../../API';
import { useQuery } from '../../hooks/query';
import { showModal } from '../../navigation';
import { ADD_SHELF_SCREEN } from './constants';
import { Navigation } from 'react-native-navigation';

interface HomeScreenProps {
  componentId: string;
}

const HomeScreen: React.FunctionComponent<HomeScreenProps> = ({
  componentId,
}) => {
  const { data, refetch, refetching } = useQuery<ListShelfsQuery>(listShelfs);

  useNavigationButtonPress(e => {
    if (e.buttonId === 'add-shelf') {
      showModal(ADD_SHELF_SCREEN);
    }
  }, componentId);

  // https://github.com/wix/react-native-navigation/issues/5651
  useNavigationComponentDidAppear(() => {
    Navigation.mergeOptions(componentId, {
      topBar: {
        rightButtons: [
          {
            id: 'add-shelf',
            icon: require('../../../assets/ui/medical-room-wait.png'),
            color: '#ffffff',
          },
        ],
      },
    });
  }, componentId);

  if (!data) {
    return (
      <Layout style={globalStyles.contentContainer}>
        <ActivityIndicator />
      </Layout>
    );
  }

  const renderIcon = (style: any) => <Icon {...style} name="book" />;

  return (
    <FlatList
      onRefresh={refetch}
      refreshing={refetching}
      data={data.listShelfs?.items ?? []}
      keyExtractor={(_, index) => `${index}`}
      renderItem={({ item }: any) => (
        <ListItem title={item.name} icon={renderIcon} />
      )}
    />
  );
};

// @ts-ignore
HomeScreen.options = () => ({
  topBar: {
    searchBar: true,
    searchBarHiddenWhenScrolling: true,
    searchBarPlaceholder: 'Discover books...',
    title: {
      text: 'Booksy',
    },
  },
});

export default HomeScreen;
