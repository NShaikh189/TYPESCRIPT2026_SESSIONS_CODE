
//Abstract class is a class that cannot be instantiated. It can only be extended by other classes. It is used to define a common interface for a group of related classes.

//Abstract class can have both abstract and non-abstract methods. Abstract methods are declared without an implementation and must be implemented by the derived classes. Non-abstract methods can have an implementation and can be used by the derived classes.
abstract class WHO{
    abstract covidVaccination():void;
}

abstract class Page extends WHO{
   abstract title():void;
   abstract url():void;
   
   display():void{
    console.log("Page displayed");
   }

   pageLoad():void{
    console.log("Page is loaded in 20 seconds");
   }

   footers():void{
    console.log("footers are displayed in 5 seconds");
   }
}

class LoginPage extends Page{
    //WHO
    covidVaccination(): void {
        throw new Error("Method not implemented.");
    }
    title(): void {
        console.log("Login Page Title");
    }
    url(): void {
        console.log("Login Page URL");
    }

    override pageLoad():void{
        console.log("Login Page is overloaded in 10 seconds");
    }
}

let loginPage:LoginPage = new LoginPage();
loginPage.title();
loginPage.url();
loginPage.display();
loginPage.pageLoad();
loginPage.footers();