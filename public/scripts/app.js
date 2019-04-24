'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            options: []
        };
        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleAddOptions = _this.handleAddOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return { options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    }) };
            });
        }
    }, {
        key: 'handleAddOptions',
        value: function handleAddOptions(option) {
            if (!option) {
                return 'Please Enter a value';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This entry already exist';
            }
            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            console.log(option);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var options = JSON.parse(localStorage.getItem('options'));
            this.setState(function () {
                return { options: options };
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var data = JSON.stringify(this.state.options);
                localStorage.setItem('options', data);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { name: 'david' }),
                React.createElement(Action, { hasAction: this.state.options.length > 0 ? false : true, handlePick: this.handlePick }),
                React.createElement(Options, { options: this.state.options, deleteAll: this.handleDeleteOptions, deleteOne: this.handleDeleteOption }),
                React.createElement(AddOption, { addOptions: this.handleAddOptions })
            );
        }
    }]);

    return App;
}(React.Component);

var Header = function Header() {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Indecision'
        ),
        React.createElement(
            'h2',
            null,
            'Put your life in the hands of a computer'
        )
    );
};
var Button = function Button(props) {
    return React.createElement(
        'button',
        { disabled: props.type, onClick: props.event },
        props.name
    );
};
var Action = function Action(props) {
    var hasAction = props.hasAction,
        handlePick = props.handlePick;

    return React.createElement(Button, { name: 'what should i do?', type: hasAction, event: handlePick });
};
var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(Button, { name: 'Remove All', event: props.deleteAll }),
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                optionText: option,
                handleDeleteOption: props.deleteOne
            });
        })
    );
};
var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText,
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionText);
                } },
            'Remove'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.onFormSubmit = _this2.onFormSubmit.bind(_this2);
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'onFormSubmit',
        value: function onFormSubmit(e) {
            e.preventDefault();
            var addOptions = this.props.addOptions;

            var option = e.target.option.value;
            option = option.trim();
            if (!option && option.trim().length === 0) {
                return console.log('empty');
            }
            addOptions(option);
            e.target.option.value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.onFormSubmit },
                    React.createElement('input', { type: 'text', placeholder: 'example', name: 'option', 'data-action': 'option' }),
                    React.createElement(Button, { name: 'add option' })
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
