import { Component } from "../../../core";
import { todoList } from '../../../services/todoList/TodoList'
import "../../atoms/Spinner/Spinner";

export class InputGroup extends Component {


    onSubmit = (evt) => {
        evt.preventDefault();
        const task = {};
        const data = new FormData(evt.target);
        if(this.props.taskid) {
            data.append("id", this.props.taskid);
        }
        data.forEach((value, key) => {
            task[key] = value;
        })
        
        this.dispatch(this.props.type, task)
    }

    componentDidMount() {
        this.addEventListener('submit', this.onSubmit);

    }

    componentWillUnmount() {
        this.removeEventListener('submit', this.onSubmit)
    }

    static get observedAttributes() {
        return ['type', 'value', 'isshowcanselbutton', 'taskid']
    }

    render() {
        return `
        <form class="input-group mb-3">
        <input 
            name='title' 
            type="text" 
            class="form-control" 
            placeholder="Add a new task"
            value = "${this.props.value ?? ''}"
        />
        <button type = 'submit' class="btn btn-outline-primary">Save</button>
        ${this.props.isshowcanselbutton
                ? '<button  type="button" class="btn btn-outline-secondary cansel">Cansel</button>'
                : ''
            }
        </form>
        `
    }
}

customElements.define('my-input-group', InputGroup)