<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <!-- mini statistic start -->
        <v-flex lg3 sm6 xs12>
          <mini-statistic icon="fa fa-facebook" title="100+" sub-title="Likes" color="indigo"></mini-statistic>
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <mini-statistic icon="fa fa-google" title="150+" sub-title="Connections" color="red"></mini-statistic>
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <mini-statistic
            icon="fa fa-twitter"
            title="200+"
            sub-title="Followers"
            color="light-blue"
          ></mini-statistic>
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <mini-statistic icon="fa fa-instagram" title="50+" sub-title="Shots" color="purple"></mini-statistic>
        </v-flex>
        <!-- mini statistic  end -->
        <v-flex lg8 sm12 xs12>
          <v-widget title="Site Traffic" content-bg="white">
            <v-btn icon slot="widget-header-action">
              <v-icon class="text--secondary">refresh</v-icon>
            </v-btn>
            <div slot="widget-content">
              <e-chart
                :path-option="[
                  ['dataset.source', siteTrafficData],
                  ['color', [color.lightBlue.base, color.green.lighten1]],
                  ['legend.show', true],
                  ['xAxis.axisLabel.show', true],
                  ['yAxis.axisLabel.show', true],
                  ['grid.left', '2%'],
                  ['grid.bottom', '5%'],
                  ['grid.right', '3%'],
                  ['series[0].type', 'bar'],
                  ['series[0].areaStyle', {}],
                  ['series[0].smooth', true],
                  ['series[1].smooth', true],
                  ['series[1].type', 'bar'],
                  ['series[1].areaStyle', {}],
                ]"
                height="400px"
                width="85%"
              ></e-chart>
            </div>
          </v-widget>
        </v-flex>
        <v-flex lg4 sm12 xs12>
          <v-widget title="Top Location" content-bg="white">
            <div slot="widget-content">
              <e-chart
                :path-option="[
                  ['dataset.source', locationData],
                  ['legend.bottom', '0'],
                  ['color', [color.lightBlue.base, color.indigo.base, color.pink.base, color.green.base, color.cyan.base, color.teal.base]],
                  ['xAxis.show', false],
                  ['yAxis.show', false],
                  ['series[0].type', 'pie'],
                  ['series[0].avoidLabelOverlap', true],
                  ['series[0].radius', ['50%', '70%']],
                ]"
                height="400px"
                width="100%"
              ></e-chart>
            </div>
          </v-widget>
        </v-flex>
        <!-- social/weather card start -->
        <v-flex lg4 sm12 xs12>
          <profile-card></profile-card>
        </v-flex>
        <v-flex lg4 sm12 xs12>
          <box-chart
            card-color="indigo"
            title="Trending"
            sub-title="10%"
            icon="trending_up"
            :data="siteTrafficData"
            :chart-color="[color.indigo.lighten1]"
            type="line"
          ></box-chart>
          <box-chart
            class="mt-4"
            card-color="pink"
            title="Page views"
            sub-title="10%"
            icon="trending_up"
            :data="siteTrafficData"
            :chart-color="[color.pink.darken1, 'rgba(255,255,255,0.3)']"
            gradient
            type="area"
          ></box-chart>
        </v-flex>
        <!-- statistic section -->
        <v-flex lg4 sm12 xs12>
          <linear-statistic
            title="Sales"
            sub-title="Sales increase"
            icon="trending_up"
            color="success"
            :value="15"
          ></linear-statistic>
          <linear-statistic
            class="my-4"
            title="Orders"
            sub-title="Increase"
            icon="trending_up"
            color="pink"
            :value="30"
          ></linear-statistic>
          <linear-statistic
            class="my-4"
            title="Revenue"
            sub-title="Revenue increase"
            icon="trending_up"
            color="primary"
            :value="50"
          ></linear-statistic>
          <linear-statistic
            class="mt-4"
            title="Cost"
            sub-title="Cost reduce"
            icon="trending_down"
            color="orange"
            :value="25"
          ></linear-statistic>
        </v-flex>
        <!-- Circle statistic -->
        <v-flex lg4 sm12 xs12 v-for="(item,index) in trending" :key="'c-trending'+index">
          <circle-statistic
            :title="item.subheading"
            :sub-title="item.headline"
            :caption="item.caption"
            :icon="item.icon.label"
            :color="item.linear.color"
            :value="item.linear.value"
          ></circle-statistic>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import API from '@/static/api'
import EChart from '@/components/chart/echart'
import MiniStatistic from '@/components/widgets/statistic/MiniStatistic'
import PostListCard from '@/components/widgets/card/PostListCard'
import ProfileCard from '@/components/widgets/card/ProfileCard'
import PostSingleCard from '@/components/widgets/card/PostSingleCard'
import WeatherCard from '@/components/widgets/card/WeatherCard'
import VWidget from '@/components/VWidget'
import Material from 'vuetify/es5/util/colors'
import VCircle from '@/components/circle/VCircle'
import BoxChart from '@/components/widgets/chart/BoxChart'
import CircleStatistic from '@/components/widgets/statistic/CircleStatistic'
import LinearStatistic from '@/components/widgets/statistic/LinearStatistic'

export default {
  layout: 'dashboard',
  components: {
    VWidget,
    MiniStatistic,
    VCircle,
    WeatherCard,
    PostSingleCard,
    PostListCard,
    ProfileCard,
    EChart,
    BoxChart,
    CircleStatistic,
    LinearStatistic
  },
  data: () => ({
    color: Material,
    selectedTab: 'tab-1',
    trending: [
      {
        subheading: 'Email',
        headline: '15+',
        caption: 'email opens',
        percent: 15,
        icon: {
          label: 'email',
          color: 'info'
        },
        linear: {
          value: 15,
          color: 'info'
        }
      },
      {
        subheading: 'Tasks',
        headline: '90%',
        caption: 'tasks completed.',
        percent: 90,
        icon: {
          label: 'list',
          color: 'primary'
        },
        linear: {
          value: 90,
          color: 'success'
        }
      },
      {
        subheading: 'Issues',
        headline: '100%',
        caption: 'issues fixed.',
        percent: 100,
        icon: {
          label: 'bug_report',
          color: 'primary'
        },
        linear: {
          value: 100,
          color: 'error'
        }
      }
    ]
  }),
  computed: {
    siteTrafficData() {
      return API.getMonthVisit
    },
    locationData() {
      return API.getLocation
    }
  }
}
</script>
