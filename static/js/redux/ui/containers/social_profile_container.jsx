import { connect } from 'react-redux';
import { SocialProfile } from '../social_profile.jsx';

const mapStateToProps = (state) => {
	return {
		userInfo: state.userInfo.data
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		showUserSettings: () => dispatch({
			type: "OVERRIDE_SETTINGS_SHOW",
			data: true,
		}),
		triggerAcquisitionModal: () => dispatch({
			type: "TRIGGER_ACQUISITION_MODAL"
		})
	}
}

const SocialProfileContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SocialProfile);

export default SocialProfileContainer;
