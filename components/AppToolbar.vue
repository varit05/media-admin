<template>
  <v-app-bar app>
    <v-toolbar color="primary" fixed dark>
      <v-toolbar-title class="ml-0 pl-3">
        <v-icon @click.stop="toggleDrawer()">menu</v-icon>
      </v-toolbar-title>
      <v-text-field
        text
        solo-inverted
        prepend-inner-icon="search"
        label="Search"
        class="ml-5 hidden-sm-and-down"
        hide-details
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon href="https://github.com/varit05/media-admin">
        <v-icon>fa-2x fa-github</v-icon>
      </v-btn>
      <v-btn icon @click="handleFullScreen()">
        <v-icon>fullscreen</v-icon>
      </v-btn>
      <v-menu
        offset-y
        origin="center center"
        class="elelvation-1"
        :nudge-right="140"
        :nudge-bottom="14"
        transition="scale-transition"
      >
        <v-btn icon text slot:activator="{on}">
          <v-badge color="red" overlap>
            <span slot="badge">3</span>
            <v-icon medium>notifications</v-icon>
          </v-badge>
        </v-btn>
      </v-menu>
      <v-menu
        offset-y
        origin="center center"
        :nudge-right="140"
        :nudge-bottom="10"
        transition="scale-transition"
      >
        <v-btn icon large text slot:activator="{on}">
          <v-avatar size="30px">
            <img src="../static/avatar/man_1.jpg" alt="Michael Wang">
          </v-avatar>
        </v-btn>
        <v-list class="pa-0">
          <v-list-item
            v-for="(item,index) in items"
            :to="!item.href ? { name: item.name } : null"
            :href="item.href"
            @click="item.click"
            ripple="ripple"
            :disabled="item.disabled"
            :target="item.target"
            rel="noopener"
            :key="index"
          >
            <v-list-item-action v-if="item.icon">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-app-bar>
</template>
<script>
import Util from '@/util'

export default {
  name: 'app-toolbar',
  data: function() {
    return {
      items: [
        {
          icon: 'account_circle',
          href: '#',
          title: 'Profile',
          click: (e) => {
            console.log(e)
          }
        },
        {
          icon: 'settings',
          href: '#',
          title: 'Settings',
          click: (e) => {
            console.log(e)
          }
        },
        {
          icon: 'fullscreen_exit',
          href: '#',
          title: 'Logout',
          click: this.handleLogout
        }
      ]
    }
  },
  computed: {
    toolbarColor() {
      return this.$vuetify.options.extra.mainNav
    }
  },
  methods: {
    toggleDrawer() {
      this.$store.commit('toggleDrawer')
    },
    handleFullScreen() {
      Util.toggleFullScreen()
    },
    handleLogout() {
      this.$router.push('/login')
    }
  }
}
</script>
<style>
.app--toolbar .v-toolbar__content {
  padding: 0px;
}
</style>