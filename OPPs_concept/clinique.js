/**
 *                              @cliniqueManagementSystem
 * 
 * @Discription : Clinique Management Programme. This programme is used to manage a list of
        Doctors associated with the Clinique. This also manages the list of patients who use 
        the clinique. It manages Doctors by Name, Id, Specialization and Availability (AM, PM 
        or both). It manages Patients by Name, ID, Mobile Number and Age. The Program allows
        users to search Doctor by name, id, Specialization or Availability. Also the programs
        allows users to search patient by name, mobile number or id. The programs allows
        patients to take appointment with the doctor. A doctor at any availability time can see
        only 5 patients. If exceeded the user can take appointment for patient at different date 
        or availability time. Print the Doctor Patient Report. Also show which Specialization is
        popular in the Clinique as well as which Doctor is popular.
 * 
 * 
 *      @author : Deepak Singh
 * 
 *      @singh : 30/11/2019
 * 
 * 
 */




var utility = require('./cliniqueMangement');
var clinique = new utility.cliniqueManagement();
clinique.addDoctor();

