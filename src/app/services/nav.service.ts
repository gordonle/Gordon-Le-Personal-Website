import { Injectable } from "@angular/core";
import { Router } from "@angular/router"
import { Subject, BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class NavService {
    private currentPg = new Subject;
    private navStatus = new Subject;
    private blogEntry = new Subject;

    constructor(private router: Router) {}

    public getPage = () => {
        return this.currentPg.asObservable();
    }

    public changePage = (page: string) => {
        this.close();
        setTimeout(() => this.currentPg.next(page), 500);
    }

    public getBlog = () => {
        return this.blogEntry.asObservable();
    }

    public openBlog = (entry: string) => {
        this.blogEntry.next(entry);
    }

    public isOpen = () => {
        return this.navStatus.asObservable();
    }

    public close = () => {
        this.navStatus.next(false);
    }

    public open = () => {
        this.navStatus.next(true);
    }
}