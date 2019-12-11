import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import SwitchInput from '../../components/SwitchInput';
import ColorInput from '../../components/ColorInput';
import Select from '../../components/Select';
import Row from '../../components/Row';
import Button from '../../components/Button';
import { saveSettings } from '../../actions/settings';

export class SettingsPage extends Component {
  constructor(props) {
    super(props);

    const { settings } = this.props;
    this.state = {
      settings: {
        apply_aging: true,
        apply_aging_style: 'pirate',
        show_age: true,
        show_age_text_color: '#000000',
        show_age_bg_color: '#FFFFFF',
        show_real_age: true,
        show_real_age_text_color: '#000000',
        show_real_age_bg_color: '#FFFFFF',
        ...settings
      }
    };
  }

  handleInputChange = (name, value) => {
    this.setState(prevState => ({
      settings: {
        ...prevState.settings,
        [name]: value
      }
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { triggerSaveSettings } = this.props;
    const { settings } = this.state;

    triggerSaveSettings(settings);
  }

  render() {
    const { settings } = this.state;

    const agingStyleOptions = [];
    agingStyleOptions.push(<option value="pirate">Pirate</option>);
    agingStyleOptions.push(<option value="fade">Fade</option>);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Card title="Aging Effect">
            <SwitchInput
              label="Enabled"
              id="apply-aging"
              name="apply_aging"
              setValue={this.handleInputChange}
              value={settings.apply_aging}
            />
            <Select
              id="apply-aging-style"
              label={'Style:'}
              key={'apply-aging-style'}
              options={agingStyleOptions}
              name={'apply_aging_style'}
              value={settings.apply_aging_style}
              setValue={this.handleInputChange}
            />
          </Card>
          <Card title="Display last activity date">
            <SwitchInput
              label="Enabled"
              name="show_age"
              id="show-age"
              setValue={this.handleInputChange}
              value={settings.show_age}
            />
            <ColorInput
              id={'show-age-text-color'}
              name={'show_age_text_color'}
              label={'Text color'}
              setValue={this.handleInputChange}
              value={settings.show_age_text_color}
            />
            <ColorInput
              id={'show-age-bg-color'}
              name={'show_age_bg_color'}
              label={'Background color'}
              setValue={this.handleInputChange}
              value={settings.show_age_bg_color}
            />
          </Card>
          <Card title={'Display card age'}>
            <SwitchInput
              label="Enabled"
              name="show_real_age"
              id="show-real-age"
              setValue={this.handleInputChange}
              value={settings.show_real_age}
            />
            <ColorInput
              id={'show-real-age-text-color'}
              name={'show_real_age_text_color'}
              label={'Text color'}
              setValue={this.handleInputChange}
              value={settings.show_real_age_text_color}
            />
            <ColorInput
              id={'show-real-age-bg-color'}
              name={'show_real_age_bg_color'}
              label={'Background color'}
              setValue={this.handleInputChange}
              value={settings.show_real_age_bg_color}
            />
          </Card>
          <Row>
            <Button type="submit">Save</Button>
            (Refresh the page to take effect)
          </Row>
        </form>
      </div>
    );
  }
}

SettingsPage.propTypes = {
  settings: PropTypes.func
};

const mapStateToProps = state => ({
  settings: state.settings
});

const mapDispatchToProps = dispatch => ({
  triggerSaveSettings: settings => dispatch(saveSettings(settings))
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
