class Person {
    private socialSecurityNumber: string;
    
    constructor(public name: string, public age: number, socialSecurityNumber: string) {
        this.socialSecurityNumber = socialSecurityNumber;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }
}
