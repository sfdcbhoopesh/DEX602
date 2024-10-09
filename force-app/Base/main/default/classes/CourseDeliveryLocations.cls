public with sharing class CourseDeliveryLocations {
    @AuraEnabled(cacheable=true)
    public static string methodName(){
        try {
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}