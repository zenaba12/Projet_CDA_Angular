import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'http://127.0.0.1:8000/comments.json'; // URL correcte

  constructor(private http: HttpClient) {}

  getCommentsByProduct(productId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}?product=${productId}`);
  }

  addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.apiUrl, comment);
  }

  deleteComment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}.json`);
  }
}
