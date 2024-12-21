import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrl = 'http://localhost:3000/update-chat'; // Server endpoint to update chat

  constructor(private http: HttpClient) {}

  // Load the existing chat history (ChatHistory.json)
  loadChatHistory(): Observable<any> {
    return this.http.get('ChatHistory.json'); // Path to the JSON file in src/assets
  }

  // Send the updated chat history (JSON data) to the server
  updateChat(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data); // Send the updated data to the server
  }
}
