import React from 'react';
import { RefreshControl, ActivityIndicator } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { List, ListItem, Icon, Layout } from 'react-native-ui-kitten';
import { globalStyles } from '../../styles/global';
import { listShelfs } from '../../graphql/queries';
import { ListShelfsQuery } from '../../API';
import { useQuery } from '../../hooks/query';
import { HeaderButtons, Item } from '../HeaderButtons';
import ScrollView from '../ScrollView';

export const LibraryScreen: NavigationStackScreenComponent = () => {
  const { data, refetch, refetching } = useQuery<ListShelfsQuery>(listShelfs);

  if (!data) {
    return (
      <Layout style={globalStyles.contentContainer}>
        <ActivityIndicator />
      </Layout>
    );
  }

  const renderIcon = (style: any) => <Icon {...style} name="book" />;

  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refetching} onRefresh={refetch} />}>
      <List
        data={data.listShelfs.items}
        renderItem={({ item, index }) => (
          <ListItem title={item.name} key={index} icon={renderIcon} />
        )}
      />
    </ScrollView>
  );
};

LibraryScreen.navigationOptions = () => ({
  title: 'Book Shelves',
  headerRight: () => (
    <HeaderButtons>
      <Item title="Add" iconName="add" onPress={() => console.warn('add')} />
    </HeaderButtons>
  ),
});
