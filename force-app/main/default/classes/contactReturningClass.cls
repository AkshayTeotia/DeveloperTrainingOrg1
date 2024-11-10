public with sharing class contactReturningClass {
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getcon(){

        return [SELECT Id,FirstName,Lastname, Email FROM Contact];
    }

    @AuraEnabled(cacheable=true)
    public static list<Account> getacc(){
       
        return [SELECT ID,Name FROM Account];
    }

}