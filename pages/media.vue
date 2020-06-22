<template>
  <div id="media" class="media">
    <!-- <div class="layout row media-layout">
    <div class="media-content flex transparent">-->
    <vue-perfect-scrollbar class="media-content--warp">
      <v-container grid-list-xl fluid>
        <v-layout row wrap>
          <v-flex sm12>
            <h3>Current Programs</h3>
          </v-flex>
          <v-flex lg12>
            <v-card>
              <v-toolbar color="white">
                <v-text-field
                  flat
                  solo
                  prepend-icon="search"
                  placeholder="Type something"
                  v-model="search"
                  hide-details
                  class="hidden-sm-and-down"
                ></v-text-field>
                <v-btn icon>
                  <v-icon>filter_list</v-icon>
                </v-btn>
              </v-toolbar>
              <v-divider></v-divider>
              <v-card-text class="pa-0">
                <v-data-table
                  :headers="complex.headers"
                  :search="search"
                  :items="programs"
                  :items-per-page-options="[10,25,50,{text:'All','value':-1}]"
                  class="elevation-1"
                  item-key="name"
                  show-select
                  v-model="complex.selected"
                >
                  <template v-slot:action="{item}">
                    <!-- <td>
                    <v-checkbox primary hide-details v-model="item.selected"></v-checkbox>
                    </td>-->
                    <td>{{ item.title }}</td>
                    <td>{{ item.description }}</td>
                    <td>{{ item.media[0].type }}</td>
                    <td>
                      <v-btn depressed outlined icon fab dark color="primary" small>
                        <v-icon>edit</v-icon>
                      </v-btn>
                      <v-btn depressed outlined icon fab dark color="pink" small>
                        <v-icon>delete</v-icon>
                      </v-btn>
                    </td>
                  </template>
                </v-data-table>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </vue-perfect-scrollbar>
  </div>
  <!-- </div>
  </div>-->
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import gql from 'graphql-tag'
export default {
  layout: 'dashboard',
  components: {
    'vue-perfect-scrollbar': VuePerfectScrollbar
  },
  data() {
    return {
      search: '',
      complex: {
        selected: [],
        headers: [
          {
            text: 'Title',
            value: 'title'
          },
          {
            text: 'Description',
            value: 'description'
          },
          {
            text: 'Media',
            value: 'media[0].type'
          },
          {
            text: 'Action',
            value: 'action'
          }
        ]
      }
    }
  },
  apollo: {
    programs: gql`
      query programs {
        programs {
          id
          title
          description
          media {
            url
            type
          }
        }
      }
    `
  }
}
</script>
