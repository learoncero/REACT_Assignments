type Props = {
    label: string;
    tabIndex: number;
    onTabChange(tabIndex: number): void;
};

export default function NavigationTab({label, tabIndex, onTabChange}: Props) {
return (<li className="me-2">
<a href="#" onClick={(event) => onTabChange(tabIndex)} className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">{label}</a>
</li>);
}