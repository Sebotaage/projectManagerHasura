<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md6 lg4 class="pa-4">
        <v-card hover class="projCard">
          <div>
            <h1 class="text-xs-center pa-3 pt-5">Project Ideas</h1>
            <v-divider style="margin: 0 auto; width: 90%; margin-bottom: 20px;"></v-divider>
          </div>

          <v-list
            two-line
            class="pa-2 mt-2 item-card"
            v-for="(project, index) in projectIdeas"
            :key="index"
            hover
          >
            <template class="pa-2">
              <v-list-tile
                @click="$router.push({ name: 'ProjectView', params: { name: project.name } })"
              >
                <v-list-tile-avatar>
                  <v-icon medium color="black">assignment</v-icon>
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>{{project.name}}</v-list-tile-title>
                  <v-list-tile-sub-title>{{project.description}}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md6 lg4 class="pa-4">
        <v-card hover class="projCard">
          <div>
            <h1 class="text-xs-center pa-3 pt-5">Current Projects</h1>
            <v-divider style="margin: 0 auto; width: 90%; margin-bottom: 20px;"></v-divider>
          </div>

          <v-list
            two-line
            class="pa-2 mt-2 item-card"
            v-for="(project, index) in currentProjects"
            :key="index"
            hover
          >
            <template class="pa-2">
              <v-list-tile
                @click="$router.push({ name: 'ProjectView', params: { name: project.name } })"
              >
                <v-list-tile-avatar>
                  <v-icon medium color="black">assignment</v-icon>
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>{{project.name}}</v-list-tile-title>
                  <v-list-tile-sub-title>{{project.description}}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md6 lg4 class="pa-4">
        <v-card hover class="projCard">
          <div>
            <h1 class="text-xs-center pa-3 pt-5">Launched Projects</h1>
            <v-divider style="margin: 0 auto; width: 90%; margin-bottom: 20px;"></v-divider>
          </div>

          <v-list
            two-line
            class="pa-2 mt-2 item-card"
            v-for="(project, index) in launchedProjects"
            :key="index"
            hover
          >
            <template class="pa-2">
              <v-list-tile
                @click="$router.push({ name: 'ProjectView', params: { name: project.name } })"
              >
                <v-list-tile-avatar>
                  <v-icon medium color="black">assignment</v-icon>
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>{{project.name}}</v-list-tile-title>
                  <v-list-tile-sub-title>{{project.description}}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const gql = require("../js/graphql");

export default {
  data() {
    return {
      projectIdeas: [],
      currentProjects: [],
      launchedProjects: []
    };
  },
  apollo: {
    projectIdeas: {
      query: gql.getProjects,
      loadingKey: "loading",
      update: function(data) {
        return data.projects;
      }
    }
  },
  created() {
    console.log(this.projectIdeas);
  }
};
</script>
<style scoped>
div.v-card.projCard {
  background: linear-gradient(157deg, #f0f3f5 50%, #9bb4c1 50.2%);
  min-height: 300px;
  max-height: 400px;
  overflow: hidden;
}
div.item-card {
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.9);
  width: 90%;
  margin: 0 auto;
}
</style>
