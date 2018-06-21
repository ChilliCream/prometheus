using System.Collections.Generic;
using System.Linq;

namespace HotChocolate.Integration
{
    public class CharacterRepository
    {
        private Dictionary<string, ICharacter> _characters;

        public CharacterRepository()
        {
            _characters = CreateCharacters().ToDictionary(t => t.Id);
        }

        public ICharacter GetHero(Episode episode)
        {
            if (episode == Episode.Empire)
            {
                return _characters["1000"];
            }
            return _characters["2001"];
        }

        public ICharacter GetCharacter(string id)
        {
            if (_characters.TryGetValue(id, out ICharacter c))
            {
                return c;
            }
            return null;
        }

        public Human GetHuman(string id)
        {
            if (_characters.TryGetValue(id, out ICharacter c)
                && c is Human h)
            {
                return h;
            }
            return null;
        }

        public Droid GetDroid(string id)
        {
            if (_characters.TryGetValue(id, out ICharacter c)
                && c is Droid d)
            {
                return d;
            }
            return null;
        }

        private static IEnumerable<ICharacter> CreateCharacters()
        {
            yield return new Human
            {
                Id = "1000",
                Name = "Luke Skywalker",
                Friends = new[] { "1002", "1003", "2000", "2001" },
                AppearsIn = new[] { Episode.NewHope, Episode.Empire, Episode.Jedi },
                HomePlanet = "Tatooine"
            };

            yield return new Human
            {
                Id = "1001",
                Name = "Darth Vader",
                Friends = new[] { "1004" },
                AppearsIn = new[] { Episode.NewHope, Episode.Empire, Episode.Jedi },
                HomePlanet = "Tatooine"
            };

            yield return new Human
            {
                Id = "1002",
                Name = "Han Solo",
                Friends = new[] { "1000", "1003", "2001" },
                AppearsIn = new[] { Episode.NewHope, Episode.Empire, Episode.Jedi }
            };

            yield return new Human
            {
                Id = "1003",
                Name = "Leia Organa",
                Friends = new[] { "1000", "1002", "2000", "2001" },
                AppearsIn = new[] { Episode.NewHope, Episode.Empire, Episode.Jedi },
                HomePlanet = "Alderaan"
            };

            yield return new Human
            {
                Id = "1004",
                Name = "Wilhuff Tarkin",
                Friends = new[] { "1001" },
                AppearsIn = new[] { Episode.NewHope }
            };

            yield return new Droid
            {
                Id = "2000",
                Name = "C-3PO",
                Friends = new[] { "1000", "1002", "1003", "2001" },
                AppearsIn = new[] { Episode.NewHope, Episode.Empire, Episode.Jedi },
                PrimaryFunction = "Protocol"
            };

            yield return new Droid
            {
                Id = "2001",
                Name = "R2-D2",
                Friends = new[] { "1000", "1002", "1003" },
                AppearsIn = new[] { Episode.NewHope, Episode.Empire, Episode.Jedi },
                PrimaryFunction = "Astromech"
            };
        }
    }

}
