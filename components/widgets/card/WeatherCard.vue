<template>
  <v-card>
    <v-card-media src="/static/nature/n5.jpeg" height="350">
      <v-layout column class="media ma-0">
        <v-card-title>
          <v-btn dark icon>
            <v-icon>chevron_left</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn dark icon class="mr-3">
            <v-icon>edit</v-icon>
          </v-btn>
          <v-btn dark icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
        </v-card-title>
        <v-spacer></v-spacer>
        <v-card-title class="white--text pl-5 pt-5">
          <div class="display-1 pl-5 pt-5">Ali Conners</div>
        </v-card-title>
      </v-layout>
    </v-card-media>
    <v-list two-line>
      <v-list-item href="#">
        <v-list-item-content>
          <v-list-item-title>Monday</v-list-item-title>
          <!-- <v-list-item-subtitle>Mobile</v-list-item-subtitle> -->
        </v-list-item-content>
      </v-list-item>
      <v-list-item href="#">
        <v-list-item-action></v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>(323) 555-6789</v-list-item-title>
          <v-list-item-subtitle>Work</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon>chat</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-divider inset></v-divider>
      <v-list-item href="#">
        <v-list-item-action>
          <v-icon color="indigo">mail</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>aliconnors@example.com</v-list-item-title>
          <v-list-item-subtitle>Personal</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item href="#">
        <v-list-item-action></v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>ali_connors@example.com</v-list-item-title>
          <v-list-item-subtitle>Work</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider inset></v-divider>
      <v-list-item href="#">
        <v-list-item-action>
          <v-icon color="indigo">location_on</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>1400 Main Street</v-list-item-title>
          <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {}
</script>
