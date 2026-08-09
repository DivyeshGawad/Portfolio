import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills = [
    // Core 
    { name: 'Java', icon: 'fa-brands fa-java', color: '#f89820' },
    { name: 'TypeScript', icon: 'fa-solid fa-code', color: '#3178c6' },
    { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#f7df1e' },

    // Backend 
    { name: 'Spring Boot', image: 'assets/icons/SpringBoot.png', color: '#6db33f' },
    { name: 'Spring Security', icon: 'fa-solid fa-shield-halved', color: '#6db33f' },
    { name: 'Spring', icon: 'fa-solid fa-leaf', color: '#6db33f' },
    { name: 'Hibernate', image: 'assets/icons/Hibernate.png', color: '#59666C' },
    { name: 'JPA', icon: 'fa-solid fa-database', color: '#59666C' },
    { name: 'REST API', image: 'assets/icons/API.png', color: '#00bcd4' },

    // Microservices 
    { name: 'OpenFeign', icon: 'fa-solid fa-network-wired', color: '#6db33f' },

    // Frontend 
    { name: 'Angular', icon: 'fa-brands fa-angular', color: '#dd0031' },
    { name: 'PrimeNG', image: 'assets/icons/PrimeNG.png', color: '#00bcd4' },
    { name: 'Tailwind CSS', icon: 'fa-solid fa-wind', color: '#38bdf8' },
    { name: 'HTML5', icon: 'fa-brands fa-html5', color: '#e34f26' },
    { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: '#1572b6' },

    // Databases 
    { name: 'MySQL', icon: 'fa-solid fa-database', color: '#00758f' },
    { name: 'MongoDB', image: 'assets/icons/MongoDB.png', color: '#4db33d' },

    // IoT / Real-Time 
    { name: 'MQTT', icon: 'fa-solid fa-tower-broadcast', color: '#660066' },
    { name: 'WebSockets', icon: 'fa-solid fa-plug', color: '#00bcd4' },

    // DevOps 
    { name: 'Docker', icon: 'fa-brands fa-docker', color: '#0db7ed' },
    { name: 'AWS', icon: 'fa-brands fa-aws', color: '#ff9900' },
    { name: 'Maven', icon: 'fa-solid fa-cubes', color: '#c71a36' },
    { name: 'Flyway', icon: 'fa-solid fa-database', color: '#cc0200' },

    // Tools 
    { name: 'Git', icon: 'fa-brands fa-git-alt', color: '#f1502f' },
    { name: 'GitHub', icon: 'fa-brands fa-github', color: '#fff' },
    { name: 'Postman', image: 'assets/icons/Postman.png', color: '#FF6C37' },
    { name: 'Swagger', icon: 'fa-solid fa-file-code', color: '#85ea2d' }
  ]

  duplicatedSkills: any[] = [];

  ngOnInit(): void {
    // Duplicate array for infinite scroll effect
    this.duplicatedSkills = [...this.skills, ...this.skills];
  }
}
