import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() produitId!: number;
  comments: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchComments();
  }

  fetchComments(): void {
    this.http.get<any[]>(`http://127.0.0.1:8000/api/comments?product=${this.produitId}`)
      .subscribe(data => this.comments = data);
  }
}
