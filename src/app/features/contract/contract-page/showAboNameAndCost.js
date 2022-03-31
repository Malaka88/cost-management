function showAboNameAndCost(abo) {
    if (abo.period_number == 1) {
        document.write(abo.name + " mit " + abo.cost + " € pro " + abo.period_name);
    } else {
        switch (abo.period_name) {
            case "Woche": document.write(abo.name + " mit " + abo.cost + " € alle " + abo.period_number + " " + abo.period_name + "en"); break;
            case "Monat": document.write(abo.name + " mit " + abo.cost + " € alle " + abo.period_number + " " + abo.period_name + "e"); break;
            case "Jahr": document.write(abo.name + " mit " + abo.cost + " € alle " + abo.period_number + " " + abo.period_name + "e"); break;
            default: document.write(abo.name + " mit " + abo.cost + " € pro " + abo.period_name);
        }
    }
}