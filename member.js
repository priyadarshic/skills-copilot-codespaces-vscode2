function skillsMember() {
    var member = {
        name: "John",
        age: 20,
        skills: ["JavaScript", "React", "Node"],
        details: function() {
            this.skills.forEach(function(skill) {
                console.log(`${this.name} knows ${skill}`);
            });
        }
    };
    member.details();
}
