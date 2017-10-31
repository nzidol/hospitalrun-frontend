# Getting started

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=HospitalRun%20FHIR%20API-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=HospitalRun%20FHIR%20API-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `HospitalRunFHIRAPILib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=HospitalRun%20FHIR%20API-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=HospitalRun%20FHIR%20API-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=HospitalRun%20FHIR%20API-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=HospitalRun%20FHIR%20API-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  HospitalRun FHIR APIController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=HospitalRun%20FHIR%20APIController)

## Initialization

### 

API client can be initialized as following:

```JavaScript
const lib = require('lib');


```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [PatientController](#patient_controller)

## <a name="patient_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PatientController") PatientController

### Get singleton instance

The singleton instance of the ``` PatientController ``` class can be accessed from the API Client.

```javascript
var controller = lib.PatientController;
```

### <a name="get_patient_history"></a>![Method: ](https://apidocs.io/img/method.png ".PatientController.getPatientHistory") getPatientHistory

> The history interaction retrieves the history of either a particular resource or all resources of a given type.


```javascript
function getPatientHistory(count, since, active, address, addressCity, addressCountry, addressPostalcode, addressState, addressUse, animalBreed, animalSpecies, birthdate, careprovider, deathdate, deceased, email, family, gender, given, identifier, language, link, name, organization, phone, phonetic, telecom, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| count |  ``` Optional ```  | TODO: Add a parameter description |
| since |  ``` Optional ```  | TODO: Add a parameter description |
| active |  ``` Optional ```  | Whether the patient record is active |
| address |  ``` Optional ```  | An address in any kind of address/part of the patient |
| addressCity |  ``` Optional ```  | A city specified in an address |
| addressCountry |  ``` Optional ```  | A country specified in an address |
| addressPostalcode |  ``` Optional ```  | A postalCode specified in an address |
| addressState |  ``` Optional ```  | A state specified in an address |
| addressUse |  ``` Optional ```  | A use code specified in an address |
| animalBreed |  ``` Optional ```  | The breed for animal patients |
| animalSpecies |  ``` Optional ```  | The species for animal patients |
| birthdate |  ``` Optional ```  | The patient's date of birth |
| careprovider |  ``` Optional ```  | Patient's nominated care provider, could be a care manager, not the organization that manages the record |
| deathdate |  ``` Optional ```  | The date of death has been provided and satisfies this search value |
| deceased |  ``` Optional ```  | This patient has been marked as deceased, or as a death date entered |
| email |  ``` Optional ```  | A value in an email contact |
| family |  ``` Optional ```  | A portion of the family name of the patient |
| gender |  ``` Optional ```  | Gender of the patient |
| given |  ``` Optional ```  | A portion of the given name of the patient |
| identifier |  ``` Optional ```  | A patient identifier |
| language |  ``` Optional ```  | Language code (irrespective of use value) |
| link |  ``` Optional ```  | All patients linked to the given patient |
| name |  ``` Optional ```  | A portion of either family or given name of the patient |
| organization |  ``` Optional ```  | The organization at which this person is a patient |
| phone |  ``` Optional ```  | A value in a phone contact |
| phonetic |  ``` Optional ```  | A portion of either family or given name using some kind of phonetic matching algorithm |
| telecom |  ``` Optional ```  | The value in any kind of telecom details of the patient |



#### Example Usage

```javascript

    var count = _count;
    var since = _since;
    var active = 'active';
    var address = 'address';
    var addressCity = 'address-city';
    var addressCountry = 'address-country';
    var addressPostalcode = 'address-postalcode';
    var addressState = 'address-state';
    var addressUse = 'address-use';
    var animalBreed = 'animal-breed';
    var animalSpecies = 'animal-species';
    var birthdate = 'birthdate';
    var careprovider = 'careprovider';
    var deathdate = 'deathdate';
    var deceased = 'deceased';
    var email = 'email';
    var family = 'family';
    var gender = 'gender';
    var given = 'given';
    var identifier = {
        id : 21
    };
    var language = 'language';
    var link = 'link';
    var name = 'name';
    var organization = 'organization';
    var phone = 'phone';
    var phonetic = 'phonetic';
    var telecom = 'telecom';

    controller.getPatientHistory(count, since, active, address, addressCity, addressCountry, addressPostalcode, addressState, addressUse, animalBreed, animalSpecies, birthdate, careprovider, deathdate, deceased, email, family, gender, given, identifier, language, link, name, organization, phone, phonetic, telecom, function(error, response, context) {

    
    });
```



### <a name="get_patient_history_by_id"></a>![Method: ](https://apidocs.io/img/method.png ".PatientController.getPatientHistoryById") getPatientHistoryById

> The history interaction retrieves the history of either a particular resource or all resources of a given type.


```javascript
function getPatientHistoryById(id, count, since, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| count |  ``` Optional ```  | TODO: Add a parameter description |
| since |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 'id';
    var count = _count;
    var since = _since;

    controller.getPatientHistoryById(id, count, since, function(error, response, context) {

    
    });
```



### <a name="get_patient_by_id_and_vid"></a>![Method: ](https://apidocs.io/img/method.png ".PatientController.getPatientByIdAndVid") getPatientByIdAndVid

> The vread interaction preforms a version specific read of the resource.


```javascript
function getPatientByIdAndVid(id, vid, format, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| vid |  ``` Required ```  | TODO: Add a parameter description |
| format |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 'id';
    var vid = 'vid';
    var format = Object.keys(_formatEnum)[0];

    controller.getPatientByIdAndVid(id, vid, format, function(error, response, context) {

    
    });
```



### <a name="get_patient_condition_by_id"></a>![Method: ](https://apidocs.io/img/method.png ".PatientController.getPatientConditionById") getPatientConditionById

> TODO: Add a method description


```javascript
function getPatientConditionById(id, id1, content, lastUpdated, tag, profile, security, text, list, query, sort, count, include, revinclude, summary, contained, containedType, asserter, bodySite, category, clinicalstatus, code, dateRecorded, encounter, evidence, identifier, onset, onsetInfo, patient, severity, stage, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| id1 |  ``` Optional ```  | Resource id (not a full URL) |
| content |  ``` Optional ```  | Text search against the entire resource |
| lastUpdated |  ``` Optional ```  | Date last updated. Server has discretion on the boundary precision |
| tag |  ``` Optional ```  | Search by a resource tag |
| profile |  ``` Optional ```  | Search for all resources tagged with a profile |
| security |  ``` Optional ```  | Search by a security label |
| text |  ``` Optional ```  | Text search against the narrative |
| list |  ``` Optional ```  | All resources in nominated list (by id, not a full URL) |
| query |  ``` Optional ```  | Custom named query |
| sort |  ``` Optional ```  | Order to sort results in (can repeat for inner sort orders) |
| count |  ``` Optional ```  | Number of results per page |
| include |  ``` Optional ```  | Other resources to include in the search results that search matches point to |
| revinclude |  ``` Optional ```  | Other resources to include in the search results when they refer to search matches |
| summary |  ``` Optional ```  | Just return the summary elements (for resources where this is defined) |
| contained |  ``` Optional ```  | Whether to return resources contained in other resources in the search matches |
| containedType |  ``` Optional ```  | If returning contained resources, whether to return the contained or container resources |
| asserter |  ``` Optional ```  | Person who asserts this condition |
| bodySite |  ``` Optional ```  | Anatomical location, if relevant |
| category |  ``` Optional ```  | The category of the condition |
| clinicalstatus |  ``` Optional ```  | The clinical status of the condition |
| code |  ``` Optional ```  | Code for the condition |
| dateRecorded |  ``` Optional ```  | A date, when the Condition statement was documented |
| encounter |  ``` Optional ```  | Encounter when condition first asserted |
| evidence |  ``` Optional ```  | Manifestation/symptom |
| identifier |  ``` Optional ```  | A unique identifier of the condition record |
| onset |  ``` Optional ```  | Date related onsets (dateTime and Period) |
| onsetInfo |  ``` Optional ```  | Other onsets (boolean, age, range, string) |
| patient |  ``` Optional ```  | Who has the condition? |
| severity |  ``` Optional ```  | The severity of the condition |
| stage |  ``` Optional ```  | Simple summary (disease specific) |



#### Example Usage

```javascript

    var id = 'id';
    var id1 = _id1;
    var content = _content;
    var lastUpdated = _lastUpdated;
    var tag = _tag;
    var profile = _profile;
    var security = _security;
    var text = _text;
    var list = _list;
    var query = _query;
    var sort = _sort;
    var count = _count;
    var include = _include;
    var revinclude = _revinclude;
    var summary = _summary;
    var contained = _contained;
    var containedType = _containedType;
    var asserter = 'asserter';
    var bodySite = 'body-site';
    var category = 'category';
    var clinicalstatus = 'clinicalstatus';
    var code = 39;
    var dateRecorded = 'date-recorded';
    var encounter = 'encounter';
    var evidence = 'evidence';
    var identifier = {
        id : 21
    };
    var onset = 'onset';
    var onsetInfo = 'onset-info';
    var patient = 'patient';
    var severity = 'severity';
    var stage = 'stage';

    controller.getPatientConditionById(id, id1, content, lastUpdated, tag, profile, security, text, list, query, sort, count, include, revinclude, summary, contained, containedType, asserter, bodySite, category, clinicalstatus, code, dateRecorded, encounter, evidence, identifier, onset, onsetInfo, patient, severity, stage, function(error, response, context) {

    
    });
```



### <a name="get_patient_observation_by_id"></a>![Method: ](https://apidocs.io/img/method.png ".PatientController.getPatientObservationById") getPatientObservationById

> TODO: Add a method description


```javascript
function getPatientObservationById(id, id1, content, lastUpdated, tag, profile, security, text, list, query, sort, count, include, revinclude, summary, contained, containedType, category, code, componentCode, componentDataAbsentReason, componentValueConcept, componentValueQuantity, componentValueString, dataAbsentReason, date, device, encounter, identifier, patient, performer, related, relatedTarget, relatedType, specimen, status, subject, valueConcept, valueDate, valueQuantity, valueString, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| id1 |  ``` Optional ```  | Resource id (not a full URL) |
| content |  ``` Optional ```  | Text search against the entire resource |
| lastUpdated |  ``` Optional ```  | Date last updated. Server has discretion on the boundary precision |
| tag |  ``` Optional ```  | Search by a resource tag |
| profile |  ``` Optional ```  | Search for all resources tagged with a profile |
| security |  ``` Optional ```  | Search by a security label |
| text |  ``` Optional ```  | Text search against the narrative |
| list |  ``` Optional ```  | All resources in nominated list (by id, not a full URL) |
| query |  ``` Optional ```  | Custom named query |
| sort |  ``` Optional ```  | Order to sort results in (can repeat for inner sort orders) |
| count |  ``` Optional ```  | Number of results per page |
| include |  ``` Optional ```  | Other resources to include in the search results that search matches point to |
| revinclude |  ``` Optional ```  | Other resources to include in the search results when they refer to search matches |
| summary |  ``` Optional ```  | Just return the summary elements (for resources where this is defined) |
| contained |  ``` Optional ```  | Whether to return resources contained in other resources in the search matches |
| containedType |  ``` Optional ```  | If returning contained resources, whether to return the contained or container resources |
| category |  ``` Optional ```  | The classification of the type of observation |
| code |  ``` Optional ```  | The code of the observation type |
| componentCode |  ``` Optional ```  | The component code of the observation type |
| componentDataAbsentReason |  ``` Optional ```  | The reason why the expected value in the element Observation.component.value[x] is missing. |
| componentValueConcept |  ``` Optional ```  | The value of the component observation, if the value is a CodeableConcept |
| componentValueQuantity |  ``` Optional ```  | The value of the component observation, if the value is a Quantity, or a SampledData (just search on the bounds of the values in sampled data) |
| componentValueString |  ``` Optional ```  | The value of the component observation, if the value is a string, and also searches in CodeableConcept.text |
| dataAbsentReason |  ``` Optional ```  | The reason why the expected value in the element Observation.value[x] is missing. |
| date |  ``` Optional ```  | Obtained date/time. If the obtained element is a period, a date that falls in the period |
| device |  ``` Optional ```  | The Device that generated the observation data. |
| encounter |  ``` Optional ```  | Healthcare event related to the observation |
| identifier |  ``` Optional ```  | The unique id for a particular observation |
| patient |  ``` Optional ```  | The subject that the observation is about (if patient) |
| performer |  ``` Optional ```  | Who performed the observation |
| related |  ``` Optional ```  | Related Observations - search on related-type and related-target together |
| relatedTarget |  ``` Optional ```  | Resource that is related to this one |
| relatedType |  ``` Optional ```  | has-member | derived-from | sequel-to | replaces | qualified-by | interfered-by |
| specimen |  ``` Optional ```  | Specimen used for this observation |
| status |  ``` Optional ```  | The status of the observation |
| subject |  ``` Optional ```  | The subject that the observation is about |
| valueConcept |  ``` Optional ```  | The value of the observation, if the value is a CodeableConcept |
| valueDate |  ``` Optional ```  | The value of the observation, if the value is a date or period of time |
| valueQuantity |  ``` Optional ```  | The value of the observation, if the value is a Quantity, or a SampledData (just search on the bounds of the values in sampled data) |
| valueString |  ``` Optional ```  | The value of the observation, if the value is a string, and also searches in CodeableConcept.text |



#### Example Usage

```javascript

    var id = 'id';
    var id1 = _id1;
    var content = _content;
    var lastUpdated = _lastUpdated;
    var tag = _tag;
    var profile = _profile;
    var security = _security;
    var text = _text;
    var list = _list;
    var query = _query;
    var sort = _sort;
    var count = _count;
    var include = _include;
    var revinclude = _revinclude;
    var summary = _summary;
    var contained = _contained;
    var containedType = _containedType;
    var category = 'category';
    var code = 'code';
    var componentCode = 'component-code';
    var componentDataAbsentReason = 'component-data-absent-reason';
    var componentValueConcept = 'component-value-concept';
    var componentValueQuantity = 'component-value-quantity';
    var componentValueString = 'component-value-string';
    var dataAbsentReason = 'data-absent-reason';
    var date = 'date';
    var device = 'device';
    var encounter = 'encounter';
    var identifier = {
        id : 21
    };
    var patient = 'patient';
    var performer = 'performer';
    var related = 'related';
    var relatedTarget = 'related-target';
    var relatedType = 'related-type';
    var specimen = 'specimen';
    var status = 'status';
    var subject = 'subject';
    var valueConcept = 'value-concept';
    var valueDate = 'value-date';
    var valueQuantity = 'value-quantity';
    var valueString = 'value-string';

    controller.getPatientObservationById(id, id1, content, lastUpdated, tag, profile, security, text, list, query, sort, count, include, revinclude, summary, contained, containedType, category, code, componentCode, componentDataAbsentReason, componentValueConcept, componentValueQuantity, componentValueString, dataAbsentReason, date, device, encounter, identifier, patient, performer, related, relatedTarget, relatedType, specimen, status, subject, valueConcept, valueDate, valueQuantity, valueString, function(error, response, context) {

    
    });
```



### <a name="get_patient_medication_order_by_id"></a>![Method: ](https://apidocs.io/img/method.png ".PatientController.getPatientMedicationOrderById") getPatientMedicationOrderById

> TODO: Add a method description


```javascript
function getPatientMedicationOrderById(id, id1, content, lastUpdated, tag, profile, security, text, list, query, sort, count, include, revinclude, summary, contained, containedType, code, datewritten, encounter, identifier, medication, patient, prescriber, status, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| id1 |  ``` Optional ```  | Resource id (not a full URL) |
| content |  ``` Optional ```  | Text search against the entire resource |
| lastUpdated |  ``` Optional ```  | Date last updated. Server has discretion on the boundary precision |
| tag |  ``` Optional ```  | Search by a resource tag |
| profile |  ``` Optional ```  | Search for all resources tagged with a profile |
| security |  ``` Optional ```  | Search by a security label |
| text |  ``` Optional ```  | Text search against the narrative |
| list |  ``` Optional ```  | All resources in nominated list (by id, not a full URL) |
| query |  ``` Optional ```  | Custom named query |
| sort |  ``` Optional ```  | Order to sort results in (can repeat for inner sort orders) |
| count |  ``` Optional ```  | Number of results per page |
| include |  ``` Optional ```  | Other resources to include in the search results that search matches point to |
| revinclude |  ``` Optional ```  | Other resources to include in the search results when they refer to search matches |
| summary |  ``` Optional ```  | Just return the summary elements (for resources where this is defined) |
| contained |  ``` Optional ```  | Whether to return resources contained in other resources in the search matches |
| containedType |  ``` Optional ```  | If returning contained resources, whether to return the contained or container resources |
| code |  ``` Optional ```  | Return administrations of this medication code |
| datewritten |  ``` Optional ```  | Return prescriptions written on this date |
| encounter |  ``` Optional ```  | Return prescriptions with this encounter identifier |
| identifier |  ``` Optional ```  | Return prescriptions with this external identifier |
| medication |  ``` Optional ```  | Return administrations of this medication reference |
| patient |  ``` Optional ```  | The identity of a patient to list orders for |
| prescriber |  ``` Optional ```  | Who ordered the medication(s) |
| status |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 'id';
    var id1 = _id1;
    var content = _content;
    var lastUpdated = _lastUpdated;
    var tag = _tag;
    var profile = _profile;
    var security = _security;
    var text = _text;
    var list = _list;
    var query = _query;
    var sort = _sort;
    var count = _count;
    var include = _include;
    var revinclude = _revinclude;
    var summary = _summary;
    var contained = _contained;
    var containedType = _containedType;
    var code = 'code';
    var datewritten = 'datewritten';
    var encounter = 'encounter';
    var identifier = {
        id : 21
    };
    var medication = 'medication';
    var patient = 'patient';
    var prescriber = 'prescriber';
    var status = 'status';

    controller.getPatientMedicationOrderById(id, id1, content, lastUpdated, tag, profile, security, text, list, query, sort, count, include, revinclude, summary, contained, containedType, code, datewritten, encounter, identifier, medication, patient, prescriber, status, function(error, response, context) {

    
    });
```



### <a name="get_patient_appointment_by_id"></a>![Method: ](https://apidocs.io/img/method.png ".PatientController.getPatientAppointmentById") getPatientAppointmentById

> TODO: Add a method description


```javascript
function getPatientAppointmentById(id, id1, content, lastUpdated, tag, profile, security, text, list, query, sort, count, include, revinclude, summary, contained, containedType, actor, date, identifier, location, patient, practitioner, status, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| id1 |  ``` Optional ```  | Resource id (not a full URL) |
| content |  ``` Optional ```  | Text search against the entire resource |
| lastUpdated |  ``` Optional ```  | Date last updated. Server has discretion on the boundary precision |
| tag |  ``` Optional ```  | Search by a resource tag |
| profile |  ``` Optional ```  | Search for all resources tagged with a profile |
| security |  ``` Optional ```  | Search by a security label |
| text |  ``` Optional ```  | Text search against the narrative |
| list |  ``` Optional ```  | All resources in nominated list (by id, not a full URL) |
| query |  ``` Optional ```  | Custom named query |
| sort |  ``` Optional ```  | Order to sort results in (can repeat for inner sort orders) |
| count |  ``` Optional ```  | Number of results per page |
| include |  ``` Optional ```  | Other resources to include in the search results that search matches point to |
| revinclude |  ``` Optional ```  | Other resources to include in the search results when they refer to search matches |
| summary |  ``` Optional ```  | Just return the summary elements (for resources where this is defined) |
| contained |  ``` Optional ```  | Whether to return resources contained in other resources in the search matches |
| containedType |  ``` Optional ```  | If returning contained resources, whether to return the contained or container resources |
| actor |  ``` Optional ```  | Any one of the individuals participating in the appointment |
| date |  ``` Optional ```  | Appointment date/time |
| identifier |  ``` Optional ```  | An Identifier of the Appointment |
| location |  ``` Optional ```  | The Participation status of the subject, or other participant on the appointment. Can be used to locate participants that have not responded to meeting requests. |
| patient |  ``` Optional ```  | One of the individuals of the appointment is this patient |
| practitioner |  ``` Optional ```  | One of the individuals of the appointment is this practitioner |
| status |  ``` Optional ```  | The overall status of the appointment |



#### Example Usage

```javascript

    var id = 'id';
    var id1 = _id1;
    var content = _content;
    var lastUpdated = _lastUpdated;
    var tag = _tag;
    var profile = _profile;
    var security = _security;
    var text = _text;
    var list = _list;
    var query = _query;
    var sort = _sort;
    var count = _count;
    var include = _include;
    var revinclude = _revinclude;
    var summary = _summary;
    var contained = _contained;
    var containedType = _containedType;
    var actor = 'actor';
    var date = 'date';
    var identifier = {
        id : 21
    };
    var location = 'location';
    var patient = 'patient';
    var practitioner = 'practitioner';
    var status = 'status';

    controller.getPatientAppointmentById(id, id1, content, lastUpdated, tag, profile, security, text, list, query, sort, count, include, revinclude, summary, contained, containedType, actor, date, identifier, location, patient, practitioner, status, function(error, response, context) {

    
    });
```



### <a name="get_patient_allergy_intolerance_by_id"></a>![Method: ](https://apidocs.io/img/method.png ".PatientController.getPatientAllergyIntoleranceById") getPatientAllergyIntoleranceById

> TODO: Add a method description


```javascript
function getPatientAllergyIntoleranceById(id, id1, content, lastUpdated, tag, profile, security, text, list, query, sort, count, include, revinclude, summary, contained, containedType, category, criticality, date, identifier, lastDate, manifestation, onset, patient, recorder, reporter, route, severity, status, substance, type, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| id1 |  ``` Optional ```  | Resource id (not a full URL) |
| content |  ``` Optional ```  | Text search against the entire resource |
| lastUpdated |  ``` Optional ```  | Date last updated. Server has discretion on the boundary precision |
| tag |  ``` Optional ```  | Search by a resource tag |
| profile |  ``` Optional ```  | Search for all resources tagged with a profile |
| security |  ``` Optional ```  | Search by a security label |
| text |  ``` Optional ```  | Text search against the narrative |
| list |  ``` Optional ```  | All resources in nominated list (by id, not a full URL) |
| query |  ``` Optional ```  | Custom named query |
| sort |  ``` Optional ```  | Order to sort results in (can repeat for inner sort orders) |
| count |  ``` Optional ```  | Number of results per page |
| include |  ``` Optional ```  | Other resources to include in the search results that search matches point to |
| revinclude |  ``` Optional ```  | Other resources to include in the search results when they refer to search matches |
| summary |  ``` Optional ```  | Just return the summary elements (for resources where this is defined) |
| contained |  ``` Optional ```  | Whether to return resources contained in other resources in the search matches |
| containedType |  ``` Optional ```  | If returning contained resources, whether to return the contained or container resources |
| category |  ``` Optional ```  | TODO: Add a parameter description |
| criticality |  ``` Optional ```  | CRITL | CRITH | CRITU |
| date |  ``` Optional ```  | When recorded |
| identifier |  ``` Optional ```  | External ids for this item |
| lastDate |  ``` Optional ```  | Date(/time) of last known occurrence of a reaction |
| manifestation |  ``` Optional ```  | Clinical symptoms/signs associated with the Event |
| onset |  ``` Optional ```  | Date(/time) when manifestations showed |
| patient |  ``` Optional ```  | Who the sensitivity is for |
| recorder |  ``` Optional ```  | Who recorded the sensitivity |
| reporter |  ``` Optional ```  | Source of the information about the allergy |
| route |  ``` Optional ```  | How the subject was exposed to the substance |
| severity |  ``` Optional ```  | TODO: Add a parameter description |
| status |  ``` Optional ```  | active | unconfirmed | confirmed | inactive | resolved | refuted | entered-in-error |
| substance |  ``` Optional ```  | Substance, (or class) considered to be responsible for risk |
| type |  ``` Optional ```  | allergy | intolerance - Underlying mechanism (if known) |



#### Example Usage

```javascript

    var id = 'id';
    var id1 = _id1;
    var content = _content;
    var lastUpdated = _lastUpdated;
    var tag = _tag;
    var profile = _profile;
    var security = _security;
    var text = _text;
    var list = _list;
    var query = _query;
    var sort = _sort;
    var count = _count;
    var include = _include;
    var revinclude = _revinclude;
    var summary = _summary;
    var contained = _contained;
    var containedType = _containedType;
    var category = 'category';
    var criticality = 'criticality';
    var date = 'date';
    var identifier = {
        id : 21
    };
    var lastDate = 'last-date';
    var manifestation = 'manifestation';
    var onset = 'onset';
    var patient = 'patient';
    var recorder = 'recorder';
    var reporter = 'reporter';
    var route = 'route';
    var severity = 'severity';
    var status = 'status';
    var substance = 'substance';
    var type = 'type';

    controller.getPatientAllergyIntoleranceById(id, id1, content, lastUpdated, tag, profile, security, text, list, query, sort, count, include, revinclude, summary, contained, containedType, category, criticality, date, identifier, lastDate, manifestation, onset, patient, recorder, reporter, route, severity, status, substance, type, function(error, response, context) {

    
    });
```



### <a name="get_patient_by_id"></a>![Method: ](https://apidocs.io/img/method.png ".PatientController.getPatientById") getPatientById

> The read interaction accesses the current contents of a resource.


```javascript
function getPatientById(id, format, summary, ifModifiedSince, ifNoneMatch, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| format |  ``` Optional ```  | TODO: Add a parameter description |
| summary |  ``` Optional ```  | TODO: Add a parameter description |
| ifModifiedSince |  ``` Optional ```  | TODO: Add a parameter description |
| ifNoneMatch |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 'id';
    var format = Object.keys(_formatEnum)[0];
    var summary = Object.keys(_summaryEnum)[0];
    var ifModifiedSince = 'If-Modified-Since';
    var ifNoneMatch = 'If-None-Match';

    controller.getPatientById(id, format, summary, ifModifiedSince, ifNoneMatch, function(error, response, context) {

    
    });
```



### <a name="delete_patient_by_id"></a>![Method: ](https://apidocs.io/img/method.png ".PatientController.deletePatientById") deletePatientById

> The delete interaction removes an existing resource.


```javascript
function deletePatientById(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 'id';

    controller.deletePatientById(id, function(error, response, context) {

    
    });
```



### <a name="update_patient_by_id"></a>![Method: ](https://apidocs.io/img/method.png ".PatientController.updatePatientById") updatePatientById

> The update interaction creates a new current version for an existing resource or creates an initial version if no resource already exists for the given id.


```javascript
function updatePatientById(id, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 'id';
    var body = new Patient({"key":"value"});

    controller.updatePatientById(id, body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 422 | Unprocessable Entity - the proposed resource violated applicable FHIR profiles or server business rules |




### <a name="get_patient_search"></a>![Method: ](https://apidocs.io/img/method.png ".PatientController.getPatientSearch") getPatientSearch

> This interaction searches a set of resources based on some filter criteria.


```javascript
function getPatientSearch(active, address, addressCity, addressCountry, addressPostalcode, addressState, addressUse, animalBreed, animalSpecies, birthdate, careprovider, deathdate, deceased, email, family, gender, given, identifier, language, link, name, organization, phone, phonetic, telecom, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| active |  ``` Optional ```  | Whether the patient record is active |
| address |  ``` Optional ```  | An address in any kind of address/part of the patient |
| addressCity |  ``` Optional ```  | A city specified in an address |
| addressCountry |  ``` Optional ```  | A country specified in an address |
| addressPostalcode |  ``` Optional ```  | A postalCode specified in an address |
| addressState |  ``` Optional ```  | A state specified in an address |
| addressUse |  ``` Optional ```  | A use code specified in an address |
| animalBreed |  ``` Optional ```  | The breed for animal patients |
| animalSpecies |  ``` Optional ```  | The species for animal patients |
| birthdate |  ``` Optional ```  | The patient's date of birth |
| careprovider |  ``` Optional ```  | Patient's nominated care provider, could be a care manager, not the organization that manages the record |
| deathdate |  ``` Optional ```  | The date of death has been provided and satisfies this search value |
| deceased |  ``` Optional ```  | This patient has been marked as deceased, or as a death date entered |
| email |  ``` Optional ```  | A value in an email contact |
| family |  ``` Optional ```  | A portion of the family name of the patient |
| gender |  ``` Optional ```  | Gender of the patient |
| given |  ``` Optional ```  | A portion of the given name of the patient |
| identifier |  ``` Optional ```  | A patient identifier |
| language |  ``` Optional ```  | Language code (irrespective of use value) |
| link |  ``` Optional ```  | All patients linked to the given patient |
| name |  ``` Optional ```  | A portion of either family or given name of the patient |
| organization |  ``` Optional ```  | The organization at which this person is a patient |
| phone |  ``` Optional ```  | A value in a phone contact |
| phonetic |  ``` Optional ```  | A portion of either family or given name using some kind of phonetic matching algorithm |
| telecom |  ``` Optional ```  | The value in any kind of telecom details of the patient |



#### Example Usage

```javascript

    var active = 'active';
    var address = 'address';
    var addressCity = 'address-city';
    var addressCountry = 'address-country';
    var addressPostalcode = 'address-postalcode';
    var addressState = 'address-state';
    var addressUse = 'address-use';
    var animalBreed = 'animal-breed';
    var animalSpecies = 'animal-species';
    var birthdate = 'birthdate';
    var careprovider = 'careprovider';
    var deathdate = 'deathdate';
    var deceased = 'deceased';
    var email = 'email';
    var family = 'family';
    var gender = 'gender';
    var given = 'given';
    var identifier = {
        id : 21
    };
    var language = 'language';
    var link = 'link';
    var name = 'name';
    var organization = 'organization';
    var phone = 'phone';
    var phonetic = 'phonetic';
    var telecom = 'telecom';

    controller.getPatientSearch(active, address, addressCity, addressCountry, addressPostalcode, addressState, addressUse, animalBreed, animalSpecies, birthdate, careprovider, deathdate, deceased, email, family, gender, given, identifier, language, link, name, organization, phone, phonetic, telecom, function(error, response, context) {

    
    });
```



### <a name="create_patient_search"></a>![Method: ](https://apidocs.io/img/method.png ".PatientController.createPatientSearch") createPatientSearch

> This interaction searches a set of resources based on some filter criteria.


```javascript
function createPatientSearch(callback)
```

#### Example Usage

```javascript


    controller.createPatientSearch(function(error, response, context) {

    
    });
```



### <a name="create_patient"></a>![Method: ](https://apidocs.io/img/method.png ".PatientController.createPatient") createPatient

> The create interaction creates a new resource in a server-assigned location.
> If the client wishes to have control over the id of a newly submitted resource, it should use the update interaction instead.
> 


```javascript
function createPatient(body, ifNoneExist, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |
| ifNoneExist |  ``` Optional ```  | name=value selective criteria |



#### Example Usage

```javascript

    var body = new Patient({"key":"value"});
    var ifNoneExist = 'If-None-Exist';

    controller.createPatient(body, ifNoneExist, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 412 | Precondition Failed error indicating the client's criteria were not selective enough. |




### <a name="get_patient"></a>![Method: ](https://apidocs.io/img/method.png ".PatientController.getPatient") getPatient

> This interaction searches a set of resources based on some filter criteria.


```javascript
function getPatient(active, address, addressCity, addressCountry, addressPostalcode, addressState, addressUse, animalBreed, animalSpecies, birthdate, careprovider, deathdate, deceased, email, family, gender, given, identifier, language, link, name, organization, phone, phonetic, telecom, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| active |  ``` Optional ```  | Whether the patient record is active |
| address |  ``` Optional ```  | An address in any kind of address/part of the patient |
| addressCity |  ``` Optional ```  | A city specified in an address |
| addressCountry |  ``` Optional ```  | A country specified in an address |
| addressPostalcode |  ``` Optional ```  | A postalCode specified in an address |
| addressState |  ``` Optional ```  | A state specified in an address |
| addressUse |  ``` Optional ```  | A use code specified in an address |
| animalBreed |  ``` Optional ```  | The breed for animal patients |
| animalSpecies |  ``` Optional ```  | The species for animal patients |
| birthdate |  ``` Optional ```  | The patient's date of birth |
| careprovider |  ``` Optional ```  | Patient's nominated care provider, could be a care manager, not the organization that manages the record |
| deathdate |  ``` Optional ```  | The date of death has been provided and satisfies this search value |
| deceased |  ``` Optional ```  | This patient has been marked as deceased, or as a death date entered |
| email |  ``` Optional ```  | A value in an email contact |
| family |  ``` Optional ```  | A portion of the family name of the patient |
| gender |  ``` Optional ```  | Gender of the patient |
| given |  ``` Optional ```  | A portion of the given name of the patient |
| identifier |  ``` Optional ```  | A patient identifier |
| language |  ``` Optional ```  | Language code (irrespective of use value) |
| link |  ``` Optional ```  | All patients linked to the given patient |
| name |  ``` Optional ```  | A portion of either family or given name of the patient |
| organization |  ``` Optional ```  | The organization at which this person is a patient |
| phone |  ``` Optional ```  | A value in a phone contact |
| phonetic |  ``` Optional ```  | A portion of either family or given name using some kind of phonetic matching algorithm |
| telecom |  ``` Optional ```  | The value in any kind of telecom details of the patient |



#### Example Usage

```javascript

    var active = 'active';
    var address = 'address';
    var addressCity = 'address-city';
    var addressCountry = 'address-country';
    var addressPostalcode = 'address-postalcode';
    var addressState = 'address-state';
    var addressUse = 'address-use';
    var animalBreed = 'animal-breed';
    var animalSpecies = 'animal-species';
    var birthdate = 'birthdate';
    var careprovider = 'careprovider';
    var deathdate = 'deathdate';
    var deceased = 'deceased';
    var email = 'email';
    var family = 'family';
    var gender = 'gender';
    var given = 'given';
    var identifier = {
        id : 21
    };
    var language = 'language';
    var link = 'link';
    var name = 'name';
    var organization = 'organization';
    var phone = 'phone';
    var phonetic = 'phonetic';
    var telecom = 'telecom';

    controller.getPatient(active, address, addressCity, addressCountry, addressPostalcode, addressState, addressUse, animalBreed, animalSpecies, birthdate, careprovider, deathdate, deceased, email, family, gender, given, identifier, language, link, name, organization, phone, phonetic, telecom, function(error, response, context) {

    
    });
```



### <a name="delete_patient"></a>![Method: ](https://apidocs.io/img/method.png ".PatientController.deletePatient") deletePatient

> The conditional delete interaction allows a client to delete an existing resource based on some selection criteria, rather than by a specific logical id.


```javascript
function deletePatient(active, address, addressCity, addressCountry, addressPostalcode, addressState, addressUse, animalBreed, animalSpecies, birthdate, careprovider, deathdate, deceased, email, family, gender, given, identifier, language, link, name, organization, phone, phonetic, telecom, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| active |  ``` Optional ```  | Whether the patient record is active |
| address |  ``` Optional ```  | An address in any kind of address/part of the patient |
| addressCity |  ``` Optional ```  | A city specified in an address |
| addressCountry |  ``` Optional ```  | A country specified in an address |
| addressPostalcode |  ``` Optional ```  | A postalCode specified in an address |
| addressState |  ``` Optional ```  | A state specified in an address |
| addressUse |  ``` Optional ```  | A use code specified in an address |
| animalBreed |  ``` Optional ```  | The breed for animal patients |
| animalSpecies |  ``` Optional ```  | The species for animal patients |
| birthdate |  ``` Optional ```  | The patient's date of birth |
| careprovider |  ``` Optional ```  | Patient's nominated care provider, could be a care manager, not the organization that manages the record |
| deathdate |  ``` Optional ```  | The date of death has been provided and satisfies this search value |
| deceased |  ``` Optional ```  | This patient has been marked as deceased, or as a death date entered |
| email |  ``` Optional ```  | A value in an email contact |
| family |  ``` Optional ```  | A portion of the family name of the patient |
| gender |  ``` Optional ```  | Gender of the patient |
| given |  ``` Optional ```  | A portion of the given name of the patient |
| identifier |  ``` Optional ```  | A patient identifier |
| language |  ``` Optional ```  | Language code (irrespective of use value) |
| link |  ``` Optional ```  | All patients linked to the given patient |
| name |  ``` Optional ```  | A portion of either family or given name of the patient |
| organization |  ``` Optional ```  | The organization at which this person is a patient |
| phone |  ``` Optional ```  | A value in a phone contact |
| phonetic |  ``` Optional ```  | A portion of either family or given name using some kind of phonetic matching algorithm |
| telecom |  ``` Optional ```  | The value in any kind of telecom details of the patient |



#### Example Usage

```javascript

    var active = 'active';
    var address = 'address';
    var addressCity = 'address-city';
    var addressCountry = 'address-country';
    var addressPostalcode = 'address-postalcode';
    var addressState = 'address-state';
    var addressUse = 'address-use';
    var animalBreed = 'animal-breed';
    var animalSpecies = 'animal-species';
    var birthdate = 'birthdate';
    var careprovider = 'careprovider';
    var deathdate = 'deathdate';
    var deceased = 'deceased';
    var email = 'email';
    var family = 'family';
    var gender = 'gender';
    var given = 'given';
    var identifier = {
        id : 21
    };
    var language = 'language';
    var link = 'link';
    var name = 'name';
    var organization = 'organization';
    var phone = 'phone';
    var phonetic = 'phonetic';
    var telecom = 'telecom';

    controller.deletePatient(active, address, addressCity, addressCountry, addressPostalcode, addressState, addressUse, animalBreed, animalSpecies, birthdate, careprovider, deathdate, deceased, email, family, gender, given, identifier, language, link, name, organization, phone, phonetic, telecom, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 404 | Not found |
| 412 | Precondition Failed error indicating the client's criteria were not selective enough. |




### <a name="update_patient"></a>![Method: ](https://apidocs.io/img/method.png ".PatientController.updatePatient") updatePatient

> The conditional update interaction allows a client to update an existing resource based on some identification criteria, rather than by logical id.


```javascript
function updatePatient(active, address, addressCity, addressCountry, addressPostalcode, addressState, addressUse, animalBreed, animalSpecies, birthdate, careprovider, deathdate, deceased, email, family, gender, given, identifier, language, link, name, organization, phone, phonetic, telecom, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| active |  ``` Optional ```  | Whether the patient record is active |
| address |  ``` Optional ```  | An address in any kind of address/part of the patient |
| addressCity |  ``` Optional ```  | A city specified in an address |
| addressCountry |  ``` Optional ```  | A country specified in an address |
| addressPostalcode |  ``` Optional ```  | A postalCode specified in an address |
| addressState |  ``` Optional ```  | A state specified in an address |
| addressUse |  ``` Optional ```  | A use code specified in an address |
| animalBreed |  ``` Optional ```  | The breed for animal patients |
| animalSpecies |  ``` Optional ```  | The species for animal patients |
| birthdate |  ``` Optional ```  | The patient's date of birth |
| careprovider |  ``` Optional ```  | Patient's nominated care provider, could be a care manager, not the organization that manages the record |
| deathdate |  ``` Optional ```  | The date of death has been provided and satisfies this search value |
| deceased |  ``` Optional ```  | This patient has been marked as deceased, or as a death date entered |
| email |  ``` Optional ```  | A value in an email contact |
| family |  ``` Optional ```  | A portion of the family name of the patient |
| gender |  ``` Optional ```  | Gender of the patient |
| given |  ``` Optional ```  | A portion of the given name of the patient |
| identifier |  ``` Optional ```  | A patient identifier |
| language |  ``` Optional ```  | Language code (irrespective of use value) |
| link |  ``` Optional ```  | All patients linked to the given patient |
| name |  ``` Optional ```  | A portion of either family or given name of the patient |
| organization |  ``` Optional ```  | The organization at which this person is a patient |
| phone |  ``` Optional ```  | A value in a phone contact |
| phonetic |  ``` Optional ```  | A portion of either family or given name using some kind of phonetic matching algorithm |
| telecom |  ``` Optional ```  | The value in any kind of telecom details of the patient |



#### Example Usage

```javascript

    var active = 'active';
    var address = 'address';
    var addressCity = 'address-city';
    var addressCountry = 'address-country';
    var addressPostalcode = 'address-postalcode';
    var addressState = 'address-state';
    var addressUse = 'address-use';
    var animalBreed = 'animal-breed';
    var animalSpecies = 'animal-species';
    var birthdate = 'birthdate';
    var careprovider = 'careprovider';
    var deathdate = 'deathdate';
    var deceased = 'deceased';
    var email = 'email';
    var family = 'family';
    var gender = 'gender';
    var given = 'given';
    var identifier = {
        id : 21
    };
    var language = 'language';
    var link = 'link';
    var name = 'name';
    var organization = 'organization';
    var phone = 'phone';
    var phonetic = 'phonetic';
    var telecom = 'telecom';

    controller.updatePatient(active, address, addressCity, addressCountry, addressPostalcode, addressState, addressUse, animalBreed, animalSpecies, birthdate, careprovider, deathdate, deceased, email, family, gender, given, identifier, language, link, name, organization, phone, phonetic, telecom, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 412 | Precondition Failed error indicating the client's criteria were not selective enough |




[Back to List of Controllers](#list_of_controllers)



