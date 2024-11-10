public with sharing class getAccountClass {
    @AuraEnabled(cacheable=true)
    public static list<Account> getAcc() {
        return[SELECT Id, Name ,Phone,Type,Industry,AnnualRevenue FROM Account];

    }
}