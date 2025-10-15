import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './master-layout.html',
  styleUrls: ['./master-layout.css']
})
export class MasterLayoutComponent { }
