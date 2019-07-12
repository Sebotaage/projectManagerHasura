<template>
  <div class="pa-0 ma-0">
    <v-toolbar dark>
      <v-spacer></v-spacer>
      <v-toolbar-items class="text-xs-center">
        <v-btn flat @click="$router.push('/')" style="text-transform: capitalize;">
          <h2>Project Manager</h2>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" :mini-variant="mini" dark left app>
      <v-toolbar flat class>
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg" />
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon @click.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile @click="$router.push('/');" class="pt-3 pb-3">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>

        <v-list-tile @click="dialog = !dialog" class="pt-3 pb-3">
          <v-list-tile-action>
            <v-icon>add</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>New Project idea</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>

        <v-list-tile @click class="pt-3 pb-3">
          <v-list-tile-action>
            <v-icon>build</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Account</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider></v-divider>

        <v-list-tile @click class="pt-3 pb-3">
          <v-list-tile-action>
            <v-icon>build</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Timeline</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>
    <v-container class="pa-0 ma-0">
      <v-dialog scrollable v-model="dialog" persistent max-width="600">
        <template v-slot:activator="{ on }"></template>
        <v-card class="dialog">
          <v-card-title class="headline layout justify-center pt-4">New Project Idea</v-card-title>
          <v-card-text>
            <v-layout wrap>
              <v-flex xs12 md12 lg12 pl-2 pr-2>
                <v-text-field solo label="Project Name" v-model="project.name" required></v-text-field>
              </v-flex>
              <v-flex xs12 md12 lg12 pl-2 pr-2>
                <v-textarea solo label="Description" v-model="project.description" required></v-textarea>
              </v-flex>
              <v-flex xs12 md12 lg12 pl-2 pr-2 pb-4>
                <h3 class="layout justify-center">Frameworks/Databases</h3>
              </v-flex>
              <v-flex xs12 md6 lg6 pl-2 pr-2>
                <v-text-field solo label="Frontend" v-model="project.frontend"></v-text-field>
              </v-flex>
              <v-flex xs12 md6 lg6 pl-2 pr-2>
                <v-text-field solo label="Backend" v-model="project.backend"></v-text-field>
              </v-flex>
              <v-flex xs12 md6 lg6 pl-2 pr-2>
                <v-text-field solo label="Database" v-model="project.database"></v-text-field>
              </v-flex>
              <v-flex xs12 md6 lg6 pl-2 pr-2>
                <v-text-field solo label="CSS" v-model="project.css"></v-text-field>
              </v-flex>
              <v-flex xs12 md6 lg6 pl-2 pr-2>
                <v-text-field solo label="Authentication" v-model="project.auth"></v-text-field>
              </v-flex>
              <v-flex xs12 md6 lg6 pl-2 pr-2>
                <v-text-field solo label="Git repo adress" v-model="project.git"></v-text-field>
              </v-flex>
              <v-flex xs12 md12 lg12 pl-2 pr-2 pb-4>
                <h3 class="layout justify-center">Todos</h3>
              </v-flex>
              <v-flex
                xs12
                md12
                lg12
                pl-2
                pr-2
                pb-0
                mb-0
                v-for="(todo, index) in project.todos"
                :key="index"
              >
                <v-text-field solo label="Task" v-model="todo.name"></v-text-field>
              </v-flex>
              <v-flex xs12 md6 lg6 pl-2 pr-2 class="layout justify-end">
                <v-btn fab small color="success" @click="pushTodo()">+</v-btn>
              </v-flex>
              <v-flex xs12 md6 lg6 pl-2 pr-2 class="layour justify-start">
                <v-btn fab small color="error" @click="project.todos.pop()">-</v-btn>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-card-actions class="pb-3">
            <v-spacer></v-spacer>
            <v-btn color="black" flat @click="dialog = false">Close</v-btn>
            <v-btn color="success" round @click="saveProject(); dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>

export default {
  data() {
    return {
      mini: true,
      drawer: true,
      dialog: false,
      project: {
        stage: "projectIdea",
        name: "",
        description: "",
        frontend: "",
        backend: "",
        database: "",
        css: "",
        auth: "",
        git: "",
        todos: [{ name: "", completed: false }]
      }
    };
  },
}
</script>

<style>
div.dialog {
  background: linear-gradient(157deg, #f0f3f5 50%, #9bb4c1 50.2%);
}
</style>
