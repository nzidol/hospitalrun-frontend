/**
  * @module HospitalRunFHIRAPILib
  *
  * 
  */

'use strict';

const Configuration = require('./configuration');
const PatientController = require('./Controllers/PatientController');
const GenderEnum = require('./Models/GenderEnum');
const ObservationRelationshipTypeEnum = require('./Models/ObservationRelationshipTypeEnum');
const EncounterStateEnum = require('./Models/EncounterStateEnum');
const ObservationStatusEnum = require('./Models/ObservationStatusEnum');
const UnitOfTimeEnum = require('./Models/UnitOfTimeEnum');
const Extension = require('./Models/Extension');
const Element = require('./Models/Element');
const Address = require('./Models/Address');
const UseEnum = require('./Models/UseEnum');
const TypeEnum = require('./Models/TypeEnum');
const Period = require('./Models/Period');
const Quantity = require('./Models/Quantity');
const ComparatorEnum = require('./Models/ComparatorEnum');
const Annotation = require('./Models/Annotation');
const Reference = require('./Models/Reference');
const Attachment = require('./Models/Attachment');
const BackboneElement = require('./Models/BackboneElement');
const Coding = require('./Models/Coding');
const CodeableConcept = require('./Models/CodeableConcept');
const Conformance = require('./Models/Conformance');
const DomainResource = require('./Models/DomainResource');
const Resource = require('./Models/Resource');
const Meta = require('./Models/Meta');
const Narrative = require('./Models/Narrative');
const StatusEnum = require('./Models/StatusEnum');
const ContactItem = require('./Models/ContactItem');
const ContactPoint = require('./Models/ContactPoint');
const SystemEnum = require('./Models/SystemEnum');
const KindEnum = require('./Models/KindEnum');
const Software = require('./Models/Software');
const Implementation = require('./Models/Implementation');
const AcceptUnknownEnum = require('./Models/AcceptUnknownEnum');
const FormatItemEnum = require('./Models/FormatItemEnum');
const RestItem = require('./Models/RestItem');
const ModeEnum = require('./Models/ModeEnum');
const Security = require('./Models/Security');
const CertificateItem = require('./Models/CertificateItem');
const ResourceItem = require('./Models/ResourceItem');
const InteractionItem = require('./Models/InteractionItem');
const CodeEnum = require('./Models/CodeEnum');
const VersioningEnum = require('./Models/VersioningEnum');
const CoditionalDeleteEnum = require('./Models/CoditionalDeleteEnum');
const SearchParamItem = require('./Models/SearchParamItem');
const TypeEnum125Enum = require('./Models/TypeEnum125Enum');
const TargetItemEnum = require('./Models/TargetItemEnum');
const InteractionItem127 = require('./Models/InteractionItem127');
const CodeEnum132Enum = require('./Models/CodeEnum132Enum');
const TransactionModeEnum = require('./Models/TransactionModeEnum');
const OperationItem = require('./Models/OperationItem');
const MessagingItem = require('./Models/MessagingItem');
const EndpointItem = require('./Models/EndpointItem');
const EventItem = require('./Models/EventItem');
const CategoryEnum = require('./Models/CategoryEnum');
const ModeEnum164Enum = require('./Models/ModeEnum164Enum');
const DocumentItem = require('./Models/DocumentItem');
const ModeEnum176Enum = require('./Models/ModeEnum176Enum');
const HumanName = require('./Models/HumanName');
const UseEnum191Enum = require('./Models/UseEnum191Enum');
const Identifier = require('./Models/Identifier');
const Range = require('./Models/Range');
const Ratio = require('./Models/Ratio');
const SampledData = require('./Models/SampledData');
const Signature = require('./Models/Signature');
const Timing = require('./Models/Timing');
const Repeat = require('./Models/Repeat');
const DurationUnitsEnum = require('./Models/DurationUnitsEnum');
const PeriodUnitsEnum = require('./Models/PeriodUnitsEnum');
const WhenEnum = require('./Models/WhenEnum');
const Appointment = require('./Models/Appointment');
const StatusEnum312Enum = require('./Models/StatusEnum312Enum');
const ParticipantItem = require('./Models/ParticipantItem');
const RequiredEnum = require('./Models/RequiredEnum');
const StatusEnum337Enum = require('./Models/StatusEnum337Enum');
const AllergyIntolerance = require('./Models/AllergyIntolerance');
const StatusEnum379Enum = require('./Models/StatusEnum379Enum');
const CriticalityEnum = require('./Models/CriticalityEnum');
const TypeEnum381Enum = require('./Models/TypeEnum381Enum');
const CategoryEnum382Enum = require('./Models/CategoryEnum382Enum');
const ReactionItem = require('./Models/ReactionItem');
const CertaintyEnum = require('./Models/CertaintyEnum');
const SeverityEnum = require('./Models/SeverityEnum');
const Condition = require('./Models/Condition');
const ClinicalStatusEnum = require('./Models/ClinicalStatusEnum');
const VerificationStatusEnum = require('./Models/VerificationStatusEnum');
const Stage = require('./Models/Stage');
const EvidenceItem = require('./Models/EvidenceItem');
const MedicationOrder = require('./Models/MedicationOrder');
const StatusEnum521Enum = require('./Models/StatusEnum521Enum');
const DosageInstructionItem = require('./Models/DosageInstructionItem');
const DispenseRequest = require('./Models/DispenseRequest');
const Substitution = require('./Models/Substitution');
const Observation = require('./Models/Observation');
const StatusEnum644Enum = require('./Models/StatusEnum644Enum');
const ReferenceRangeItem = require('./Models/ReferenceRangeItem');
const RelatedItem = require('./Models/RelatedItem');
const TypeEnum709Enum = require('./Models/TypeEnum709Enum');
const ComponentItem = require('./Models/ComponentItem');
const Patient = require('./Models/Patient');
const ContactItem796 = require('./Models/ContactItem796');
const Animal = require('./Models/Animal');
const CommunicationItem = require('./Models/CommunicationItem');
const Link = require('./Models/Link');
const TypeEnum874Enum = require('./Models/TypeEnum874Enum');
const Entry = require('./Models/Entry');
const LinkItem = require('./Models/LinkItem');
const Search = require('./Models/Search');
const ModeEnum890Enum = require('./Models/ModeEnum890Enum');
const Request = require('./Models/Request');
const MethodEnum = require('./Models/MethodEnum');
const Response = require('./Models/Response');
const AppointmentEntry = require('./Models/AppointmentEntry');
const AllergyIntoleranceEntry = require('./Models/AllergyIntoleranceEntry');
const ConditionEntry = require('./Models/ConditionEntry');
const MedicationOrderEntry = require('./Models/MedicationOrderEntry');
const ObservationEntry = require('./Models/ObservationEntry');
const PatientEntry = require('./Models/PatientEntry');
const Bundle = require('./Models/Bundle');
const TypeEnum1640Enum = require('./Models/TypeEnum1640Enum');
const AppointmentBundle = require('./Models/AppointmentBundle');
const AllergyIntoleranceBundle = require('./Models/AllergyIntoleranceBundle');
const ConditionBundle = require('./Models/ConditionBundle');
const MedicationOrderBundle = require('./Models/MedicationOrderBundle');
const ObservationBundle = require('./Models/ObservationBundle');
const PatientBundle = require('./Models/PatientBundle');
const FormatEnum = require('./Models/FormatEnum');
const SummaryEnum = require('./Models/SummaryEnum');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of HospitalRunFHIRAPILib
    Configuration,
    // controllers of HospitalRunFHIRAPILib
    PatientController,
    // models of HospitalRunFHIRAPILib
    GenderEnum,
    ObservationRelationshipTypeEnum,
    EncounterStateEnum,
    ObservationStatusEnum,
    UnitOfTimeEnum,
    Extension,
    Element,
    Address,
    UseEnum,
    TypeEnum,
    Period,
    Quantity,
    ComparatorEnum,
    Annotation,
    Reference,
    Attachment,
    BackboneElement,
    Coding,
    CodeableConcept,
    Conformance,
    DomainResource,
    Resource,
    Meta,
    Narrative,
    StatusEnum,
    ContactItem,
    ContactPoint,
    SystemEnum,
    KindEnum,
    Software,
    Implementation,
    AcceptUnknownEnum,
    FormatItemEnum,
    RestItem,
    ModeEnum,
    Security,
    CertificateItem,
    ResourceItem,
    InteractionItem,
    CodeEnum,
    VersioningEnum,
    CoditionalDeleteEnum,
    SearchParamItem,
    TypeEnum125Enum,
    TargetItemEnum,
    InteractionItem127,
    CodeEnum132Enum,
    TransactionModeEnum,
    OperationItem,
    MessagingItem,
    EndpointItem,
    EventItem,
    CategoryEnum,
    ModeEnum164Enum,
    DocumentItem,
    ModeEnum176Enum,
    HumanName,
    UseEnum191Enum,
    Identifier,
    Range,
    Ratio,
    SampledData,
    Signature,
    Timing,
    Repeat,
    DurationUnitsEnum,
    PeriodUnitsEnum,
    WhenEnum,
    Appointment,
    StatusEnum312Enum,
    ParticipantItem,
    RequiredEnum,
    StatusEnum337Enum,
    AllergyIntolerance,
    StatusEnum379Enum,
    CriticalityEnum,
    TypeEnum381Enum,
    CategoryEnum382Enum,
    ReactionItem,
    CertaintyEnum,
    SeverityEnum,
    Condition,
    ClinicalStatusEnum,
    VerificationStatusEnum,
    Stage,
    EvidenceItem,
    MedicationOrder,
    StatusEnum521Enum,
    DosageInstructionItem,
    DispenseRequest,
    Substitution,
    Observation,
    StatusEnum644Enum,
    ReferenceRangeItem,
    RelatedItem,
    TypeEnum709Enum,
    ComponentItem,
    Patient,
    ContactItem796,
    Animal,
    CommunicationItem,
    Link,
    TypeEnum874Enum,
    Entry,
    LinkItem,
    Search,
    ModeEnum890Enum,
    Request,
    MethodEnum,
    Response,
    AppointmentEntry,
    AllergyIntoleranceEntry,
    ConditionEntry,
    MedicationOrderEntry,
    ObservationEntry,
    PatientEntry,
    Bundle,
    TypeEnum1640Enum,
    AppointmentBundle,
    AllergyIntoleranceBundle,
    ConditionBundle,
    MedicationOrderBundle,
    ObservationBundle,
    PatientBundle,
    FormatEnum,
    SummaryEnum,
    // exceptions of HospitalRunFHIRAPILib
    APIException,
};

module.exports = initializer;
