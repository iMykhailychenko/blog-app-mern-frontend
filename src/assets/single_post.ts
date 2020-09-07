import { ISinglePost } from '../helpers/interfaces';
import avatar from '../images/avatar.jpg';
import banner from '../images/banner.jpg';
import postImg from '../images/post.jpg';

export const post: ISinglePost = {
    title:
        'React - JavaScript-бібліотека для створення користувацьких інтерфейсів',
    desc:
        'React спрощує створення інтерактивних інтерфейсів. Вам потрібно лише описати, як різні частини інтерфейсу виглядають у кожному стані вашого додатку і React ефективно оновить та відрендерить лише потрібні компоненти, коли ваші дані зміняться. Декларативні інтерфейси роблять ваш код більш передбачуваним і його набагато легше налагоджувати.',
    tags: 'react redux typescript javascript',
    content: `<h2>JavaScript-бібліотека для створення користувацьких інтерфейсів</h2><p>React спрощує створення інтерактивних інтерфейсів. Вам потрібно лише описати, як різні частини інтерфейсу виглядають у кожному стані вашого додатку і React ефективно оновить та відрендерить лише потрібні компоненти, коли ваші дані зміняться.</p><p><br></p><h3>Декларативний</h3><p>React спрощує створення інтерактивних інтерфейсів. Вам потрібно лише описати, як різні частини інтерфейсу виглядають у кожному стані вашого додатку і React ефективно оновить та відрендерить лише потрібні компоненти, коли ваші дані зміняться.</p><p><br></p><p>Декларативні інтерфейси роблять ваш код більш передбачуваним і його набагато легше налагоджувати.</p><p><br></p><h4>Заснований на компонентах</h4><p>Створюйте інкапсульовані компоненти, які керують власним станом, а з них будуйте складні інтерфейси.</p><p><br></p><p>Оскільки логіка компонентів написана на JavaScript, замість шаблонів, ви з легкістю можете передавати складні дані у вашому додатку і зберігати стан окремо від DOM.</p><p><br></p><h3>Вивчіть лише раз — пишіть будь-де</h3><p>Ми не робимо припущень щодо стеку технологій які ви використовуєте, тому ви можете розробляти нові функції в React, не переписуючи існуючий код.</p><p><br></p><p>React також може рендеритись на сервері, використовуючи Node, і приводити в дію мобільні додатки, які використовують;<a href="https://reactnative.dev/" rel="noopener noreferrer" target="_blank">React Native</a>.</p><p><br></p><h3>Простий компонент</h3><p>Компоненти реалізують метод;<code>render()</code>, який приймає вхідні дані і повертає те, що буде показано користувачу. У цьому прикладі використовується XML-подібний синтаксис під назвою JSX. Доступ до вхідних даних, які передаються в компонент, можна отримати за допомогою;<code>render()</code>;та;<code>this.props</code>.</p><p><br></p><p><strong>JSX не є обов’язковим для React.</strong> Спробуйте <a href="https://babeljs.io/repl/#?presets=react&amp;code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAFgRgD4AJRBEAGhgHcQAnBAEwEJsB6AwgbgChRJY_KAEMAlmDh0YWRiGABXVOgB0AczhQAokiVQAQgE8AkowAUAcjogQUcwEpeAJTjDgUACIB5ALLK6aRklTRBQ0KCohMQk6Bx4gA" rel="noopener noreferrer" target="_blank">Babel REPL</a>, щоб побачити необроблений код JavaScript, створений на етапі компіляції JSX.</p><p><br></p><pre class="ql-syntax" spellcheck="false">
class HelloMessage extends React.Component { 
    render() { 
        return ( &lt;div&gt; Привіт, {this.props.name} &lt;/div&gt; ); 
    } 
} 

ReactDOM.render( 
    &lt;HelloMessage name="Петро" /&gt;, 
    document.getElementById('hello- example'), 
); 
    </pre><p><br></p><h3>Компонент зі станом</h3><p>У доповнення до прийняття вхідних даних (доступ до яких здійснюється через;<code>this.props</code>), компонент може зберігати дані внутрішнього стану (доступні через;<code>this.state</code>). Коли дані стану компонента змінюються, відбувається повторне відрендерення розмітки з використанням функції;<code>render()</code>.</p><p><br></p><p><img src="${postImg}"></p><p><br></p><pre class="ql-syntax" spellcheck="false">
class Timer extends React.Component { 
    constructor(props) { 
        super(props); this.state = { seconds: 0 }; 
    } 
    
    tick() { 
        this.setState(state =&gt; ({ 
            seconds: state.seconds + 1 
        })); 
    } 
    
    componentDidMount() { 
        this.interval = setInterval(() =&gt; this.tick(), 1000); 
    } 
    
    componentWillUnmount() { 
        clearInterval(this.interval); 
    } 
    
    render() { 
        return ( 
            &lt;div&gt; Пройшло секунд: {this.state.seconds} &lt;/div&gt; 
        ); 
    } 
} 
    
ReactDOM.render( 
    &lt;Timer /&gt;, document.getElementById('timer - example') 
); 
    </pre>`,
    banner,
    date: '07.08.2020',
    like: ['01', '02', '03', '50', '34', '32'],
    dislike: ['23', '765', '88', '39'],
    watched: ['23', '765', '88', '39', '01', '02', '03', '50', '34', '32'],
    user: {
        id: 'user-001',
        avatar,
        name: 'Ihor Mykhailychenko',
        email: 'ihor_mail@gmail.com',
        nick: 'ihormykh',
    },
};
