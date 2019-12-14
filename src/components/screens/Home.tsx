import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import TableView from 'react-native-tableview';
import { useNavigationButtonPress } from 'react-native-navigation-hooks';
import { globalStyles } from '../../styles/global';
import { listShelfs } from '../../graphql/queries';
import { ListShelfsQuery } from '../../API';
import { useQuery } from '../../hooks/query';
import { showModal } from '../../navigation';
import { ADD_SHELF_SCREEN } from './constants';
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
      <View style={globalStyles.contentContainer}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={globalStyles.flexView}>
      <TableView
        style={globalStyles.flexView}
        canRefresh
        refreshing={refetching}
        onRefresh={refetch}>
        <TableView.Section>
          {data.listShelfs?.items?.map(item => (
            <TableView.Item transparent key={item!.id}>
              {item!.name}
            </TableView.Item>
          ))}
        </TableView.Section>
      </TableView>
    </View>
  );
};

HomeScreen.options = () => ({
  topBar: {
    title: {
      text: 'Booksy',
    },
    largeTitle: {
      visible: true,
    },
    searchBar: true,
    searchBarHiddenWhenScrolling: true,
    searchBarPlaceholder: 'Search your library',
    rightButtons: [
      {
        id: 'add-shelf',
        icon: require('../../../assets/ui/add.png'),
      },
    ],
  },
});

export default HomeScreen;
