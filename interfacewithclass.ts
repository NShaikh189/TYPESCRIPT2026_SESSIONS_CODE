
//100% abstraction - only method declaration and no method body 
//can not create object of interface    
//can not have constructor
//can not have method body
//can not have data member
//can not have static member
//can not have access specifier

interface USMedical{
    physio():void;
    cardio():void;
    ortho():void;
    emergency():void;
}


interface IndianMedical{
    eNT():void;
    dental():void;
    eye():void;
    emergency():void;
}

interface UKMedical{
    neuro():void;
    gastro():void;
    pediatric():void;
    emergency():void;
}

class FortisHospital implements USMedical, IndianMedical, UKMedical{
   //common method for all interfaces but it is implemented from UKMedical interface
    emergency(): void {
       console.log("Fortis Hospital - Medical Emergency");
    }
    physio(): void {
        console.log("Fortis Hospital - Physio Department");
    }
    cardio(): void {
        console.log("Fortis Hospital - Cardio Department");
    }
    ortho(): void {
        console.log("Fortis Hospital - Ortho Department");
    }
    eNT(): void {
        console.log("Fortis Hospital - ENT Department");
    }
    dental(): void {
        console.log("Fortis Hospital - Dental Department");
    }
    eye(): void {
        console.log("Fortis Hospital - Eye Department");
    }
    neuro(): void {
        console.log("Fortis Hospital - Neuro Department");
    }
    gastro(): void {
        console.log("Fortis Hospital - Gastro Department");
    }
    pediatric(): void {
        console.log("Fortis Hospital - Pediatric Department");
    }

    
}

let fortis:FortisHospital = new FortisHospital();
fortis.physio();
fortis.cardio();
fortis.ortho();
fortis.eNT();
fortis.dental();
fortis.eye();
fortis.neuro();
fortis.gastro();
fortis.pediatric();
fortis.emergency();

console.log("======================");

let usMed: USMedical = new FortisHospital();
usMed.physio();
usMed.cardio();
usMed.ortho();
usMed.emergency();

// usMed.eNT(); // Error: Property 'eNT' does not exist on type 'USMedical'.