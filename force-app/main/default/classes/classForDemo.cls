public with sharing class classForDemo {
    @AuraEnabled(cacheable=true)
    public static integer add(Integer a,Integer b){

        return a+b;
    } 
}