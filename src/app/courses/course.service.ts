import { Injectable } from "@angular/core";
import { Course } from "./course";

@Injectable({
    providedIn: "root"
})
export class CourseSevice{
    
    retrieveAll(): Course[]{
        return COURSES;
    }
    retrieveById(id: number) {
        
    }
}
var COURSES: Course[] = [
    {
        id: 1 ,
        name: 'Angular: CLI',
        releaseDate: 'November 2, 2021',
        description: 'Neste curso, os alunos irÃ£o obter um grande conhecimento nos principais recursos do CLI.',
        duration: 120,
        code: 'XLF-1212',
        rating: 3,
        price: 12.99,
        imageUrl: '/assets/images/cli.png',
    },
    {
        id: 2,
        name: 'Angular: Forms',
        releaseDate: 'November 4, 2021',
        description: 'Neste curso, os alunos irÃ£o obter um conhecimento aprofundado sobre os recursos disponÃ­veis no mÃ³dulo de Forms.',
        duration: 80,
        code: 'DWQ-3412',
        rating: 3.5,
        price: 24.99,
        imageUrl: '/assets/images/forms.png',
    },
    {
        id: 3,
        name: 'Angular: HTTP',
        releaseDate: 'November 8, 2021',
        description: 'Neste curso, os alunos irÃ£o obter um conhecimento aprofundado sobre os recursos disponÃ­veis no mÃ³dulo de HTTP.',
        duration: 80,
        code: 'QPL-0913',
        rating: 4.0,
        price: 36.99,
        imageUrl: '/assets/images/http.png',
    },
    {
        id: 4,
        name: 'Angular: Router',
        releaseDate: 'November 16, 2021',
        description: 'Neste curso, os alunos irÃ£o obter um conhecimento aprofundado sobre os recursos disponÃ­veis no mÃ³dulo de Router.',
        duration: 80,
        code: 'OHP-1095',
        rating: 4.5,
        price: 46.99,
        imageUrl: '/assets/images/router.png',
    },
    {
        id: 5,
        name: 'Angular: Animations',
        releaseDate: 'November 25, 2021',
        description: 'Neste curso, os alunos irÃ£o obter um conhecimento aprofundado sobre os recursos disponÃ­veis sobre Animation.',
        duration: 80,
        code: 'PWY-9381',
        rating: 5,
        price: 56.99,
        imageUrl: '/assets/images/animations.png',
    }
];