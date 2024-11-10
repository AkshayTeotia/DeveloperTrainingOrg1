public with sharing class TestClass1 {
    public TestClass1() {

    }
    public static void selectUserByProfile(String ProfileName){
        List<User> Userlist = [Select Id,Name FROM User WHERE Profile.Name =: ProfileName];
    }
}