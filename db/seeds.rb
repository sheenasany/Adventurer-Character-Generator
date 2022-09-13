User.destroy_all
Template.destroy_all
Character.destroy_all

puts "🌱 Seeding spices..."
puts "Seeding Users..."
u1 = User.create(name: "Jonathon")
u2 = User.create(name: "Sheena")
u3 = User.create(name: "Quade")

puts "Seeding Templates..."
t1 = Template.create(level: rand(1..10), constitution: rand(1..20), strength: rand(1..20), intelligence: rand(1..20), charisma: rand(1..20), wisdom: rand(1..20), dexterity: rand(1..20), class_name: "Barbarian", race: "Human", spell1: nil, spell2: nil, ability1: "Rage", ability2: "Reckless Attack", weapon1: "Two-handed Axe", weapon2: nil)
t2 = Template.create(level: rand(1..10), constitution: rand(1..20), strength: rand(1..20), intelligence: rand(1..20), charisma: rand(1..20), wisdom: rand(1..20), dexterity: rand(1..20), class_name: "Barbarian", race: "Orc", spell1: nil, spell2: nil, ability1: "Extra Attack", ability2: "Danger Sense", weapon1: "Two-handed Hammer", weapon2: nil)
t3 = Template.create(level: rand(1..10), constitution: rand(1..20), strength: rand(1..20), intelligence: rand(1..20), charisma: rand(1..20), wisdom: rand(1..20), dexterity: rand(1..20), class_name: "Barbarian", race: "Halfing", spell1: nil, spell2: nil, ability1: "Rage", ability2: "Sneak", weapon1: "One-handed Axe", weapon2: "One-handed Hammer")
t4 = Template.create(level: rand(1..10), constitution: rand(1..20), strength: rand(1..20), intelligence: rand(1..20), charisma: rand(1..20), wisdom: rand(1..20), dexterity: rand(1..20), class_name: "Bard", race: "Human", spell1: "Invisibility", spell2: "Bigby's Hand", ability1: "Bardic Inspiration", ability2: "Song of Rest", weapon1: "Sword", weapon2: nil)
t5 = Template.create(level: rand(1..10), constitution: rand(1..20), strength: rand(1..20), intelligence: rand(1..20), charisma: rand(1..20), wisdom: rand(1..20), dexterity: rand(1..20), class_name: "Bard", race: "Hafling", spell1: "Magic Missiles", spell2: "Blade Ward", ability1: "Counter-Charm", ability2: "Magical Secrets", weapon1: "Lute", weapon2: "Dagger")
t6 = Template.create(level: rand(1..10), constitution: rand(1..20), strength: rand(1..20), intelligence: rand(1..20), charisma: rand(1..20), wisdom: rand(1..20), dexterity: rand(1..20), class_name: "Bard", race: "Elf", spell1: "Cure Wounds", spell2: "Charm Person", ability1: "Bardic Inspiration", ability2: "Song of Rest", weapon1: "Bow", weapon2: "Dagger")
t7 = Template.create(level: rand(1..10), constitution: rand(1..20), strength: rand(1..20), intelligence: rand(1..20), charisma: rand(1..20), wisdom: rand(1..20), dexterity: rand(1..20), class_name: "Rogue", race: "Human", spell1: nil, spell2: nil, ability1: "Uncanny Dodge", ability2: "Cunning Action", weapon1: "Dagger", weapon2: "Dagger")
t8 = Template.create(level: rand(1..10), constitution: rand(1..20), strength: rand(1..20), intelligence: rand(1..20), charisma: rand(1..20), wisdom: rand(1..20), dexterity: rand(1..20), class_name: "Rogue", race: "Half-Elf", spell1: nil, spell2: nil, ability1: "Feather Flight", ability2: "Thieves Cant", weapon1: "Bow", weapon2: "Dagger")
t9 = Template.create(level: rand(1..10), constitution: rand(1..20), strength: rand(1..20), intelligence: rand(1..20), charisma: rand(1..20), wisdom: rand(1..20), dexterity: rand(1..20), class_name: "Rogue", race: "Gnome", spell1: nil, spell2: nil, ability1: "Blind Sense", ability2: "Slippery Mind", weapon1: "Crossbow", weapon2: "Sword")
t10 = Template.create(level: rand(1..10), constitution: rand(1..20), strength: rand(1..20), intelligence: rand(1..20), charisma: rand(1..20), wisdom: rand(1..20), dexterity: rand(1..20), class_name: "Wizard", race: "Dragonborn", spell1: "Fireball", spell2: "Lightning Bolt", ability1: nil, ability2: nil, weapon1: "Staff", weapon2: "Dagger")
t11 = Template.create(level: rand(1..10), constitution: rand(1..20), strength: rand(1..20), intelligence: rand(1..20), charisma: rand(1..20), wisdom: rand(1..20), dexterity: rand(1..20), class_name: "Wizard", race: "Cursed Human", spell1: "Wish", spell2: nil, ability1: nil, ability2: nil, weapon1: nil, weapon2: nil)
t12 = Template.create(level: rand(1..10), constitution: rand(1..20), strength: rand(1..20), intelligence: rand(1..20), charisma: rand(1..20), wisdom: rand(1..20), dexterity: rand(1..20), class_name: "Wizard", race: "Goblin", spell1: "Animate Dead", spell2: "Feign Dead", ability1: nil, ability2: nil, weapon1: "Staff", weapon2: nil)
t13 = Template.create(level: rand(1..10), constitution: rand(1..20), strength: rand(1..20), intelligence: rand(1..20), charisma: rand(1..20), wisdom: rand(1..20), dexterity: rand(1..20), class_name: "Cleric", race: "Gnome", spell1: "Mass Cure Wounds", spell2: "Guiding Bolt", ability1: "Divine Domain", ability2: "Divine Intervention", weapon1: "Two-Handed Mace", weapon2: "Shield")
t14 = Template.create(level: rand(1..10), constitution: rand(1..20), strength: rand(1..20), intelligence: rand(1..20), charisma: rand(1..20), wisdom: rand(1..20), dexterity: rand(1..20), class_name: "Cleric", race: "Dwarf", spell1: "Sanctuary", spell2: "Shield of Faith", ability1: "Destroy Undead", ability2: "Channel Divinity", weapon1: "Staff", weapon2: nil)
t15 = Template.create(level: rand(1..10), constitution: rand(1..20), strength: rand(1..20), intelligence: rand(1..20), charisma: rand(1..20), wisdom: rand(1..20), dexterity: rand(1..20), class_name: "Cleric", race: "Elf", spell1: "Healing Word", spell2: "Revivify", ability1: "Destroy Undead", ability2: "Divine Domain", weapon1: "Dagger", weapon2: nil)
t16 = Template.create(level: rand(1..10), constitution: rand(1..20), strength: rand(1..20), intelligence: rand(1..20), charisma: rand(1..20), wisdom: rand(1..20), dexterity: rand(1..20), class_name: "Druid", race: "Firbolg", spell1: "Entanglement", spell2: "Faerie Fire", ability1: "Wild Shape", ability2: nil, weapon1: "Staff", weapon2: nil)
t17 = Template.create(level: rand(1..10), constitution: rand(1..20), strength: rand(1..20), intelligence: rand(1..20), charisma: rand(1..20), wisdom: rand(1..20), dexterity: rand(1..20), class_name: "Druid", race: "Half-Elf", spell1: "Ice Knife", spell2: "Good Berry", ability1: "Wild Shape", ability2: nil, weapon1: "Dagger", weapon2: nil)
t18 = Template.create(level: rand(1..10), constitution: rand(1..20), strength: rand(1..20), intelligence: rand(1..20), charisma: rand(1..20), wisdom: rand(1..20), dexterity: rand(1..20), class_name: "Druid", race: "Human", spell1: "Animal Messenger", spell2: "Bark Skin", ability1: "Wild Shape", ability2: nil, weapon1: "Bow", weapon2: nil)

puts "Seeding Characters..."
Character.create(name: "Lucifer", history: "Fell from grace, and now seeks revenge on his father who threw him out from heaven.", user_id: u1.id, template_id: t1.id )
Character.create(name: "Oob", history: "Can only grant wishes. Who knows what kind of wishes... ", user_id: u3.id, template_id: t11.id )
Character.create(name: "Pike Trickfoot", history: "Has trouble talking to her god, but tries really hard. Has a barbarian friend.", user_id: u2.id, template_id: t13.id )

puts "✅ Done seeding!"
