import { getLocaleEraNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    {
      id: 1,
      title: "Title 1",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam blanditiis beatae necessitatibus neque corporis voluptates quisquam nesciunt dolorem, libero, fuga aliquid odit ullam molestiae velit similique, quibusdam illum numquam fugiat."
    },
    {
      id: 2,
      title: "Title 2",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam blanditiis beatae necessitatibus neque corporis voluptates quisquam nesciunt dolorem, libero, fuga aliquid odit ullam molestiae velit similique, quibusdam illum numquam fugiat."
    },
    {
      id: 3,
      title: "Title 3",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam blanditiis beatae necessitatibus neque corporis voluptates quisquam nesciunt dolorem, libero, fuga aliquid odit ullam molestiae velit similique, quibusdam illum numquam fugiat."
    },
    {
      id: 4,
      title: "Title 4",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam blanditiis beatae necessitatibus neque corporis voluptates quisquam nesciunt dolorem, libero, fuga aliquid odit ullam molestiae velit similique, quibusdam illum numquam fugiat."
    },
    {
      id: 5,
      title: "Title 5",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam blanditiis beatae necessitatibus neque corporis voluptates quisquam nesciunt dolorem, libero, fuga aliquid odit ullam molestiae velit similique, quibusdam illum numquam fugiat."
    },
  ];

  constructor() {}

}
