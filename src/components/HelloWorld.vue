<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12 class="layout justify-center" mt-5>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
              <div style="font-size: 32px;">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda ad ullam,
                laboriosam nihil cupiditate rem eaque enim ex deleniti necessitatibus ducimus dolor ipsam,
                a voluptates corrupti neque nemo odio.
                <div v-for="(user, index) in users" :key="index">
                  <h3>{{user.name}}</h3>
                </div>
              </div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
let gql = require("../js/graphql");

export default {
  data: () => ({
    users: []
  }),
  apollo: {
    users: {
      query: gql.getUsers
    }
  }
};
</script>

<style>
</style>
