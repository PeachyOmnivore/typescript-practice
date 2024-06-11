interface JobTitles {
    jobTitles: string[];
}

class User implements JobTitles {
    private readonly name: string;
    private readonly username: string;
    private readonly email: string;
    private readonly age: number;
    jobTitles: string[]

    public constructor(name: string, username: string, email: string, age: number, jobTitles: string[]) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.age = age;
        this.jobTitles = jobTitles;
    }

    public getName(): string {
        return this.name
    }

    public getUserDetails(): string[]{
        return [this.name + this.username + this.email + this.age]
    }

    public setJobTitles(jobTitles: string[]) {
        this.jobTitles = jobTitles;
    }

    public getJobTitles(): string[] {
        return this.jobTitles;
    }
}

let Lukas = new User ("Lukas", "PeachyOmnivore", "email@mail.com", 21, ["Software Dev"])

console.log(Lukas.getJobTitles())

