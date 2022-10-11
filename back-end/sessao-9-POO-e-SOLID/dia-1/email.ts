class Email {
    private _from: string;
    private _to: string;
    private _message: string;
    private _subject: string;

    constructor(
        from: string,
        to: string, 
        subject: string,
        message: string,
    ) {
        this._from = from;
        this._to = to;
        this._message = message;
        this._subject = '';
        this._subject = subject;
    }

    set subject(newSubject: string) {
        if (newSubject.length <= 40) this._subject = newSubject;
    }

    get subject(): string {
        return this._subject;
    }

    get from(): string { return this._from; }
    
    get to(): string { return this._to }

    get content(): string {
        return `From ${this._from} to ${this._to}
        ${this.subject}
        
        ${this._message}`
    }
}

class MailList {
  //  Essa sintaxe no construtor é chamada `Parameter Properties`
  // É um atalho para declarar e automaticamente atribuir o valor que será recebido via parâmetro ao atributo privado `mailList`
    constructor(private mailList: Email[] = []) {}

    get all(): Email[] { return this.mailList; }

    getEmailsSentBy(mailAddress: string): Email[] {
        return this.mailList.filter((mail) => mail.from === mailAddress);
    }

    getEmailsTo(mailAddress: string): Email[] {
        return this.mailList.filter((mail) => mail.to === mailAddress);
    }

    getEmailsBySubject(searchString:string): Email[] {
        return this.mailList.filter((mail) => mail.subject.indexOf(searchString) !== -1)
    }

    addEmail(newMail: Email): void { this.mailList.push(newMail); }

    removeEmail(mailToRemove: Email): void {
        this.mailList = this.mailList.filter((mail) => mail !== mailToRemove);
    }
}