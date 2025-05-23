import type { AceptacionAceptada } from './services/types/AceptacionAceptada';
import type { AceptacionRechazada } from './services/types/AceptacionRechazada';
import type { Admin } from './services/types/Admin';
import type { AnuncioServicio } from './services/types/AnuncioServicio';
import type { AreaConocimiento } from './services/types/AreaConocimiento';
import type { AreaConocimiento_Profesor } from './services/types/AreaConocimiento_Profesor';
import type { AreaServicio } from './services/types/AreaServicio';
import type { AreaServicio_AnuncioServicio } from './services/types/AreaServicio_AnuncioServicio';
import type { AreaServicio_Iniciativa } from './services/types/AreaServicio_Iniciativa';
import type { Asignatura } from './services/types/Asignatura';
import type { Colaboracion } from './services/types/Colaboracion';
import type { Colaborador } from './services/types/Colaborador';
import type { DatosPersonalesExterno } from './services/types/DatosPersonalesExterno';
import type { DatosPersonalesInterno } from './services/types/DatosPersonalesInterno';
import type { DemandaRespalda } from './services/types/DemandaRespalda';
import type { DemandaServicio } from './services/types/DemandaServicio';
import type { Estudiante } from './services/types/Estudiante';
import type { EstudianteExterno } from './services/types/EstudianteExterno';
import type { EstudianteInterno } from './services/types/EstudianteInterno';
import type { EstudianteProyecto } from './services/types/EstudianteProyecto';
import type { Iniciativa } from './services/types/Iniciativa';
import type { Mail } from './services/types/Mail';
import type { Matching } from './services/types/Matching';
import type { MatchingArea } from './services/types/MatchingArea';
import type { MatchingAreaServicioTitulacion } from './services/types/MatchingAreaServicioTitulacion';
import type { Mensaje } from './services/types/Mensaje';
import type { MensajeAnuncioServicio } from './services/types/MensajeAnuncioServicio';
import type { MensajeColaboracion } from './services/types/MensajeColaboracion';
import type { NecesidadSocial } from './services/types/NecesidadSocial';
import type { Newsletter } from './services/types/Newsletter';
import type { Nota } from './services/types/Nota';
import type { Notificacion } from './services/types/Notificacion';
import type { NotificacionMatching } from './services/types/NotificacionMatching';
import type { OfertaAceptada } from './services/types/OfertaAceptada';
import type { OfertaDemanda_Tags } from './services/types/OfertaDemanda_Tags';
import type { OfertaServicio } from './services/types/OfertaServicio';
import type { OficinaAps } from './services/types/OficinaAps';
import type { Partenariado } from './services/types/Partenariado';
import type { PartenariadoRellenado } from './services/types/PartenariadoRellenado';
import type { PrevioPartenariado } from './services/types/PrevioPartenariado';
import type { Profesor } from './services/types/Profesor';
import type { ProfesorExterno } from './services/types/ProfesorExterno';
import type { ProfesorInterno } from './services/types/ProfesorInterno';
import type { ProfesorInterno_Oferta } from './services/types/ProfesorInterno_Oferta';
import type { Profesor_Colaboracion } from './services/types/Profesor_Colaboracion';
import type { Proyecto } from './services/types/Proyecto';
import type { SocioComunitario } from './services/types/SocioComunitario';
import type { Tag } from './services/types/Tag';
import type { TitulacionLocal } from './services/types/TitulacionLocal';
import type { TitulacionLocal_Demanda } from './services/types/TitulacionLocal_Demanda';
import type { TitulacionLocal_Profesor } from './services/types/TitulacionLocal_Profesor';
import type { TutorCA } from './services/types/TutorCA';
import type { Universidad } from './services/types/Universidad';
import type { Upload } from './services/types/Upload';
import type { Upload_AnuncioServicio } from './services/types/Upload_AnuncioServicio';
import type { Upload_Colaboracion } from './services/types/Upload_Colaboracion';
import type { Usuario } from './services/types/Usuario';
import type { ViewDemand } from './services/types/views/Demand';
import type { ViewNotification } from './services/types/views/Notification';
import type { ViewNotificationBackedDemand } from './services/types/views/NotificationBackedDemand';
import type { ViewNotificationConfirmationAccepted } from './services/types/views/NotificationConfirmationAccepted';
import type { ViewNotificationConfirmationRejected } from './services/types/views/NotificationConfirmationRejected';
import type { ViewNotificationMatchingNotification } from './services/types/views/NotificationMatchingNotification';
import type { ViewNotificationOfferAccepted } from './services/types/views/NotificationOfferAccepted';
import type { ViewNotificationPartnershipFilled } from './services/types/views/NotificationPartnershipFilled';
import type { ViewPartnership } from './services/types/views/Partnership';
import type { ViewServiceOffer } from './services/types/views/ServiceOffer';
import type { ViewUser } from './services/types/views/User';
import type { ViewUserAdmin } from './services/types/views/UserAdmin';
import type { ViewUserApSOffice } from './services/types/views/UserApSOffice';
import type { ViewUserCommunityPartner } from './services/types/views/UserCommunityPartner';
import type { ViewUserExternalProfessor } from './services/types/views/UserExternalProfessor';
import type { ViewUserExternalStudent } from './services/types/views/UserExternalStudent';
import type { ViewUserInternalProfessor } from './services/types/views/UserInternalProfessor';
import type { ViewUserInternalStudent } from './services/types/views/UserInternalStudent';
import type { ViewUserPrivileged } from './services/types/views/UserPrivileged';

declare module 'knex/types/tables' {
	interface Tables {
		// Views
		[ViewUser.Name]: ViewUser.RawValue;
		[ViewUserAdmin.Name]: ViewUserAdmin.Value;
		[ViewUserExternalStudent.Name]: ViewUserExternalStudent.Value;
		[ViewUserExternalProfessor.Name]: ViewUserExternalProfessor.RawValue;
		[ViewUserInternalStudent.Name]: ViewUserInternalStudent.Value;
		[ViewUserInternalProfessor.Name]: ViewUserInternalProfessor.Value;
		[ViewUserApSOffice.Name]: ViewUserApSOffice.Value;
		[ViewUserCommunityPartner.Name]: ViewUserCommunityPartner.Value;
		[ViewUserPrivileged.Name]: ViewUserPrivileged.Value;
		[ViewDemand.Name]: ViewDemand.RawValue;
		[ViewPartnership.Name]: ViewPartnership.Value;
		[ViewServiceOffer.Name]: ViewServiceOffer.RawValue;
		[ViewNotification.Name]: ViewNotification.Value;
		[ViewNotificationConfirmationAccepted.Name]: ViewNotificationConfirmationAccepted.Value;
		[ViewNotificationConfirmationRejected.Name]: ViewNotificationConfirmationRejected.Value;
		[ViewNotificationBackedDemand.Name]: ViewNotificationBackedDemand.Value;
		[ViewNotificationMatchingNotification.Name]: ViewNotificationMatchingNotification.Value;
		[ViewNotificationOfferAccepted.Name]: ViewNotificationOfferAccepted.Value;
		[ViewNotificationPartnershipFilled.Name]: ViewNotificationPartnershipFilled.Value;

		// Tables
		[AceptacionAceptada.Name]: AceptacionAceptada.Value;
		[AceptacionRechazada.Name]: AceptacionRechazada.Value;
		[Admin.Name]: Admin.Value;
		[AnuncioServicio.Name]: AnuncioServicio.Value;
		[AreaConocimiento_Profesor.Name]: AreaConocimiento_Profesor.Value;
		[AreaConocimiento.Name]: AreaConocimiento.Value;
		[AreaServicio_AnuncioServicio.Name]: AreaServicio_AnuncioServicio.Value;
		[AreaServicio_Iniciativa.Name]: AreaServicio_Iniciativa.Value;
		[AreaServicio.Name]: AreaServicio.Value;
		[Asignatura.Name]: Asignatura.Value;
		[Colaboracion.Name]: Colaboracion.Value;
		[DatosPersonalesExterno.Name]: DatosPersonalesExterno.Value;
		[DatosPersonalesInterno.Name]: DatosPersonalesInterno.Value;
		[DemandaRespalda.Name]: DemandaRespalda.Value;
		[DemandaServicio.Name]: DemandaServicio.Value;
		[Estudiante.Name]: Estudiante.Value;
		[EstudianteExterno.Name]: EstudianteExterno.Value;
		[EstudianteInterno.Name]: EstudianteInterno.Value;
		[EstudianteProyecto.Name]: EstudianteProyecto.Value;
		[Iniciativa.Name]: Iniciativa.Value;
		[Mail.Name]: Mail.Value;
		[Matching.Name]: Matching.Value;
		[MatchingArea.Name]: MatchingArea.Value;
		[MatchingAreaServicioTitulacion.Name]: MatchingAreaServicioTitulacion.Value;
		[Mensaje.Name]: Mensaje.Value;
		[MensajeAnuncioServicio.Name]: MensajeAnuncioServicio.Value;
		[MensajeColaboracion.Name]: MensajeColaboracion.Value;
		[NecesidadSocial.Name]: NecesidadSocial.Value;
		[Newsletter.Name]: Newsletter.Value;
		[Nota.Name]: Nota.Value;
		[Notificacion.Name]: Notificacion.Value;
		[NotificacionMatching.Name]: NotificacionMatching.Value;
		[OfertaAceptada.Name]: OfertaAceptada.Value;
		[OfertaDemanda_Tags.Name]: OfertaDemanda_Tags.Value;
		[OfertaServicio.Name]: OfertaServicio.Value;
		[OficinaAps.Name]: OficinaAps.Value;
		[Partenariado.Name]: Partenariado.Value;
		[PartenariadoRellenado.Name]: PartenariadoRellenado.Value;
		[PrevioPartenariado.Name]: PrevioPartenariado.Value;
		[Profesor_Colaboracion.Name]: Profesor_Colaboracion.Value;
		[Profesor.Name]: Profesor.Value;
		[ProfesorExterno.Name]: ProfesorExterno.Value;
		[ProfesorInterno_Oferta.Name]: ProfesorInterno_Oferta.Value;
		[ProfesorInterno.Name]: ProfesorInterno.Value;
		[Proyecto.Name]: Proyecto.Value;
		[SocioComunitario.Name]: SocioComunitario.Value;
		[Tag.Name]: Tag.Value;
		[TitulacionLocal_Demanda.Name]: TitulacionLocal_Demanda.Value;
		[TitulacionLocal_Profesor.Name]: TitulacionLocal_Profesor.Value;
		[TitulacionLocal.Name]: TitulacionLocal.Value;
		[Universidad.Name]: Universidad.Value;
		[Upload_AnuncioServicio.Name]: Upload_AnuncioServicio.Value;
		[Upload_Colaboracion.Name]: Upload_Colaboracion.Value;
		[Upload.Name]: Upload.Value;
		[Usuario.Name]: Usuario.Value;
		[TutorCA.Name]: TutorCA.Value;
		[Colaborador.Name]: Colaborador.Value;
	}
}
