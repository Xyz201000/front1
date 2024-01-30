import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data=
    [
      { id: 1, title: "The Majestic Tiger: Guardian of the Jungles",
       content: "Explore the untamed wilderness and the life of the majestic tiger, the iconic symbol of strength and grace.",
       author: "Jane Goodall",
        date: "2024-05-10",
        tags: ["Wildlife", "Tigers", "Conservation"], url: './assets/tiger.jpeg' },
        { id: 2, title: "Dolphin Dance: Harmony in the Ocean Waves",
        content: "Dive deep into the world of dolphins, witnessing their playful interactions and the secrets of their underwater realm.",
         author: "Jacques Cousteau", date: "2024-06-01",
         tags: ["Marine Life", "Dolphins", "Ocean"]
        , url: './assets/dolphins.jpeg' },
{ id: 3, title: "Wings of Wonder: The Colorful World of Exotic Birds",
content: "Discover the vibrant and diverse avian species from around the globe, showcasing the beauty of feathers and songs.",
 author: "David Attenborough", date: "2024-06-20",
 tags: ["Birds", "Ornithology", "Nature"], url: './assets/birds.jpeg' },
{ id: 4, title: "Graceful Elephants: Giants of the Savannah",
content: "Witness the gentle giants of the savannah, the elephants, as they navigate their vast territories with grace and intelligence.",
 author: "Diane Fossey", date: "2024-07-05",
  tags: ["Elephants", "Wildlife", "Conservation"],
url: './assets/elephants.jpeg' },
{ id: 5, title: "Underwater Wonders: Exploring the Coral Reefs",
content: "Dive into the mesmerizing world of coral reefs, discovering the incredible diversity of marine life that calls these ecosystems home.",
author: "Sylvia Earle", date: "2024-07-25",
tags: ["Marine Life", "Coral Reefs", "Ocean"], url: './assets/coral.jpeg' }
    ];
    addnewpost(blogPost: any) {
      this.data.push(blogPost);
      console.log(blogPost);
    }

  }
