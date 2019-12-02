import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { useNavigationButtonPress } from 'react-native-navigation-hooks';
import { ListItem, Icon, Layout } from 'react-native-ui-kitten';
import { globalStyles } from '../../styles/global';
import { listShelfs } from '../../graphql/queries';
import { ListShelfsQuery } from '../../API';
import { useQuery } from '../../hooks/query';
import { showModal } from '../../navigation';
import { ADD_SHELF_SCREEN } from './constants';
import { Navigation } from 'react-native-navigation';
import { NavigationComponent } from '../../types/navigation';

const HomeScreen: NavigationComponent = ({ componentId }) => {
  const { data, refetch, refetching } = useQuery<ListShelfsQuery>(listShelfs);

  useNavigationButtonPress(e => {
    if (e.buttonId === 'add-shelf') {
      showModal(ADD_SHELF_SCREEN);
    }
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

HomeScreen.options = () => ({
  topBar: {
    title: {
      text: 'Booksy',
    },
    rightButtons: [
      {
        id: 'add-shelf',
        icon: require('../../../assets/ui/nav-add-shelf.png'),
      },
    ],
  },
});

export default HomeScreen;
