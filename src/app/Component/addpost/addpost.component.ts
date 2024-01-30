import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataService } from '../../Service/data.service';

@Component({
  selector: 'app-addpost',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './addpost.component.html',
  styleUrl: './addpost.component.css'
})
export class AddpostComponent {
  constructor(private _datasev: DataService) {}
  blogPost = {
    id: 10 + Math.floor(Math.random() * 1000),
    title: '',
    content: '',
    author: '',
    date: '',
    tags: '',
    url: ''
  }
  onSubmit() {
    console.log('Form submitted:', this.blogPost);
    this._datasev.addnewpost(this.blogPost)
    alert("Bloggg uploaded........")
    // this.readlater(blogPost)
  }

   
  }
