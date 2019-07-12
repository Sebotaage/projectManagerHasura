<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg12 class="pa-4">
        <v-card hover class="projectOverview">
          <div>
            <h1 class="text-xs-center pa-3 pt-5">{{project.name}}</h1>
            <v-divider style="width: 90%; margin: 0 auto;" class="ma-3"></v-divider>
          </div>
          <v-card-text>
            <v-layout wrap class="text-xs-center">
              <v-flex xs12 sm12 md12 lg12 class="pa-4">
                <v-card hover class="projCard" style="width: 85%; margin: 0 auto;">
                  <div>
                    <h2 class="text-xs-center pa-3">Description</h2>
                    <v-divider style="margin: 0 auto; width: 90%;"></v-divider>
                  </div>
                  <v-card-text>
                    <v-flex
                      xs12
                      sm12
                      md12
                      lg12
                      class="pa-1"
                      style="font-size: 18px;"
                    >{{project.description}}</v-flex>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 sm12 md6 lg6 class="pa-4">
                <v-card
                  hover
                  class="projCard"
                  max-height="300px"
                  min-height="300px"
                  style="overflow: scroll"
                >
                  <div>
                    <h2 class="text-xs-center pa-3">Todos</h2>
                    <v-divider style="margin: 0 auto; width: 90%;" class="mb-3"></v-divider>
                    <v-layout
                      style="width: 80%; margin: 0 auto;"
                      v-for="(todo, index) in project.todos"
                      :key="index"
                      v-if="!todo.completed"
                    >
                      <v-flex xs12 sm12 md10 lg10>
                        <v-text-field placeholder="Test" @blur="saveProject()" v-model="todo.name"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm12 md2 lg2>
                        <v-checkbox
                          color="success"
                          v-model="todo.completed"
                          @click="todo.completed = !todo.completed; saveProject();"
                          class="layout justify-end"
                        ></v-checkbox>
                      </v-flex>
                    </v-layout>
                  </div>
                </v-card>
              </v-flex>
              <v-flex xs12 sm12 md6 lg6 class="pa-4">
                <v-card
                  hover
                  class="projCard"
                  max-height="300px"
                  min-height="300px"
                  style="overflow: scroll"
                >
                  <div>
                    <h2 class="text-xs-center pa-3">Finished Todos</h2>
                    <v-divider style="margin: 0 auto; width: 90%;"></v-divider>
                    <v-layout
                      style="width: 80%; margin: 0 auto;"
                      v-for="(todo, index) in project.todos"
                      :key="index"
                      v-if="todo.completed"
                    >
                      <v-flex xs12 sm12 md10 lg10>
                        <v-text-field placeholder="Test" @blur="saveProject()" v-model="todo.name"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm12 md2 lg2>
                        <v-checkbox
                          color="success"
                          v-model="todo.completed"
                          @click="todo.completed = !todo.completed; saveProject();"
                          class="layout justify-end"
                        ></v-checkbox>
                      </v-flex>
                    </v-layout>
                  </div>
                </v-card>
              </v-flex>

              <v-flex xs12 sm12 md12 lg12 class="pa-4">
                <v-card hover class="projCard">
                  <div>
                    <h2 class="text-xs-center pa-3">Git</h2>
                    <v-divider style="margin: 0 auto; width: 90%;"></v-divider>
                  </div>
                  <v-card-text>
                    <v-layout wrap class="text-xs-center">
                      <v-flex xs12 sm12 md6 lg6 class="pa-1">
                        <h3>Latest commit: Responsive Design</h3>
                      </v-flex>
                      <v-flex xs12 sm12 md6 lg6 class="pa-1">
                        <h3>At 25/05 - 2019</h3>
                      </v-flex>

                      <v-flex xs12 sm12 md6 lg6 class="pa-1">
                        <h3>By: Sebastian Sundin</h3>
                      </v-flex>
                      <v-flex xs12 sm12 md6 lg6 class="pa-1">
                        <h3>Total commits: 5</h3>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 sm12 md12 lg12 class="pa-1">
                <v-btn color="error" style="layout justify-end">Delete Project</v-btn>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "ProjectView",
  props: ["name"],
  data() {
    return {
      project: []
    };
  }
};
</script>

<style scoped>
div.projectOverview {
  background: linear-gradient(157deg, #f0f3f5 50%, #9bb4c1 50.2%);
  border-radius: 5px;
}
div.projCard {
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.85);
}
</style>
